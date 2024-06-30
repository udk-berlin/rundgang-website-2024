import { cache } from 'react';
import { getById } from '@/api/rest/api';
import { extractAuthors, extractRenderedContent } from '@/lib/data/utils';
import { ItemContext, Item, ItemFilterableContext } from '@/types/item';
import { getRenderById } from '@/api/rest/render';
import { getPathListById } from '@/api/rest/pathlist';
import {
  restApiFormatsRoot,
  restApiLocationsRoot,
  restApiStructureRootId,
} from '@/api/constants';

export const getParsedItem = cache(async (id: string): Promise<Item> => {
  const item = await getById(id);
  const renderedItem = await getRenderById(id);

  let parentsData: {
    dataKey: 'location' | 'faculty' | 'format' | undefined;
    data: (ItemContext | ItemFilterableContext)[];
  }[] = [];
  const locationsRootId = restApiLocationsRoot();
  const structureRootId = restApiStructureRootId();
  const formatsRoot = restApiFormatsRoot();

  if (item.parents) {
    parentsData = await Promise.all(
      item.parents.map((parent) =>
        getPathListById(parent).then((res) => {
          let dataKey: 'location' | 'faculty' | 'format' | undefined =
            undefined;
          const data: (ItemContext | ItemFilterableContext)[] = [];
          let isRootReached = false;

          res.forEach((context) => {
            if (isRootReached) {
              if (dataKey) {
                const itemContext: ItemContext | ItemFilterableContext = {
                  id: context.id,
                  name: context.name,
                };

                if (dataKey !== 'location') {
                  itemContext['searchParam'] = dataKey;
                }

                data.push(itemContext);
              }
            } else {
              if (context.id === locationsRootId) {
                isRootReached = true;
                dataKey = 'location';
              } else if (context.id === structureRootId) {
                isRootReached = true;
                dataKey = 'faculty';
              } else if (context.id === formatsRoot) {
                isRootReached = true;
                dataKey = 'format';
              }
            }
          });

          return { dataKey, data };
        }),
      ),
    );
  }

  return {
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    thumbnail_full_size: item.thumbnail_full_size,
    authors: extractAuthors({ item }),
    content: extractRenderedContent({
      renderedItem,
      langs: Object.keys(item.description).filter((k) => k != 'default'),
    }),
    locations: parentsData
      .filter((d) => d.dataKey === 'location')
      .map((d) => d.data)
      .flat(1),
    faculties: parentsData
      .filter((d) => d.dataKey === 'faculty')
      .map((d) => d.data)
      .flat(1) as ItemFilterableContext[],
    formats: parentsData
      .filter((d) => d.dataKey === 'format')
      .map((d) => d.data)
      .flat(1) as ItemFilterableContext[],
  };
});

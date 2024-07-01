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
import { toDate } from '@/api/rest/events';
import { RestApiTemporal } from '@/types/restApi';
import ISO6391 from 'iso-639-1';

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
                  template: context.template,
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
    descriptions: Object.entries(item.description)
      .filter(([language, _]) => language.toLowerCase() !== 'default')
      .map(([language, description]) => {
        return {
          language: {
            iso: language.toLowerCase(),
            name: ISO6391.getNativeName(language.toLowerCase()),
          },
          content: description,
        };
      }),
    languages: Object.keys(item.description)
      .filter((language) => language.toLowerCase() !== 'default')
      .map((language) => {
        return {
          id: language.toLowerCase(),
          name: ISO6391.getNativeName(language.toLowerCase()),
          searchParam: 'language',
        };
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
    times:
      item.allocation?.temporal?.map((t: RestApiTemporal) => {
        return { start: toDate(t.start), end: toDate(t.end) };
      }) ?? [],
  };
});

import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { extractAuthors, extractRenderedContent } from '@/lib/data/utils';
import { Item } from '@/types/item';

export const getItem = cache(async (id: string) => {
  const res = await fetch(getRestApiQuery(id));
  return res.json();
});

export const getRenderedItem = cache(async (id: string) => {
  const res = await fetch(getRestApiQuery(`${id}/render/json`));
  return res.json();
});

export const getParsedItem = cache(async (id: string): Promise<Item> => {
  const item = await getItem(id);
  const renderedItem = await getRenderedItem(id);

  return {
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    thumbnail_full_size: item.thumbnail_full_size,
    languages: Object.keys(item.description),
    authors: extractAuthors({ item }),
    content: extractRenderedContent({
      renderedItem,
      langs: Object.keys(item.description).filter((k) => k != 'default'),
    }),
  };
});

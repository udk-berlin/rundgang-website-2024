import { cache } from 'react';
import { getRestApiQuery } from '@/api/rest/api';
import { extractAuthors } from '@/lib/data/utils';
import { Item } from '@/types/item';

export const getItem = cache(async (id: string) => {
  const res = await fetch(getRestApiQuery(id));
  return res.json();
});

export const getParsedItem = cache(async (id: string): Promise<Item> => {
  const item = await getItem(id);
  return {
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    thumbnail_full_size: item.thumbnail_full_size,
    descriptions: item.description,
    languages: Object.keys(item.description),
    authors: extractAuthors({ item }),
  };
});

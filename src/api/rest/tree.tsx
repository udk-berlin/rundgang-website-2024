import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { ContextTree } from '@/types/types';
import { defaultFetchCacheOptions } from '@/api/rest/caching';
import { ItemContext } from '@/types/item';

export function treeUrl(id: string): string {
  return baseUrl({ query: `${id}/tree` });
}

export const getTreeById = cache(async (id: string): Promise<ContextTree> => {
  return fetch(treeUrl(id), defaultFetchCacheOptions).then((res) => res.json());
});

export const getItemList = cache(async (id: string): Promise<string[]> => {
  return fetch(
    baseUrl({ query: `${id}/list/filter/type/item` }),
    defaultFetchCacheOptions,
  )
    .then((res) => res.json())
    .then((items) => {
      return Array.isArray(items)
        ? items.map((item: ItemContext) => item.id)
        : [];
    });
});

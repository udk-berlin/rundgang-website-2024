import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { ContextTree } from '@/types/types';
import { defaultFetchCacheOptions } from '@/api/rest/caching';

export function treeUrl(id: string): string {
  return baseUrl({ query: `${id}/tree` });
}

export const getTreeById = cache(async (id: string): Promise<ContextTree> => {
  return fetch(treeUrl(id), defaultFetchCacheOptions).then((res) => res.json());
});

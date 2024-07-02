import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { ContextTree } from '@/types/types';

export function treeUrl(id: string): string {
  return baseUrl({ query: `${id}/tree` });
}

export const getTreeById = cache(async (id: string): Promise<ContextTree> => {
  const res = await fetch(treeUrl(id), { next: { revalidate: 3600 } }).then(
    (r) => r.json(),
  );
  return res;
});

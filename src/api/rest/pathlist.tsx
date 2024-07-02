import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { RestApiContext } from '@/types/restApi';

export function pathListUrl(id: string): string {
  return baseUrl({ query: `${id}/pathlist` });
}

export const getPathListById = cache(
  async (id: string): Promise<RestApiContext[]> => {
    const res = await fetch(pathListUrl(id), { next: { revalidate: 3600 } });
    return res.json();
  },
);

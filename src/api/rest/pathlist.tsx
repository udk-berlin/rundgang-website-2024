import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { RestApiContext } from '@/types/restApi';
import { defaultFetchCacheOptions } from '@/api/rest/caching';

export function pathListUrl(id: string): string {
  return baseUrl({ query: `${id}/pathlist` });
}

export const getPathListById = cache(
  async (id: string): Promise<RestApiContext[]> => {
    return fetch(pathListUrl(id), defaultFetchCacheOptions).then((res) =>
      res.json(),
    );
  },
);

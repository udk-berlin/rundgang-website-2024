import { cache } from 'react';
import { RestApiContext } from '@/types/restApi';
import { defaultFetchCacheOptions } from '@/api/rest/caching';

export const endpoint = process.env.REST_API_ENDPOINT;

export function baseUrl({ query }: { query?: string }): string {
  return `${endpoint}${query ? `/${query}` : ''}`;
}

export const getById = cache(async (id: string): Promise<RestApiContext> => {
  return fetch(baseUrl({ query: id }), defaultFetchCacheOptions).then((res) =>
    res.json(),
  );
});

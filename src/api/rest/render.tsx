import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';
import { defaultFetchCacheOptions } from '@/api/rest/caching';

export function renderUrl(id: string): string {
  return baseUrl({ query: `${id}/render/json` });
}

export const getRenderById = cache(async (id: string) => {
  return fetch(renderUrl(id), defaultFetchCacheOptions).then((res) =>
    res.json(),
  );
});

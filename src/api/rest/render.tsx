import { baseUrl } from '@/api/rest/api';
import { cache } from 'react';

export function renderUrl(id: string): string {
  return baseUrl({ query: `${id}/render/json` });
}

export const getRenderById = cache(async (id: string) => {
  const res = await fetch(renderUrl(id));
  return res.json();
});

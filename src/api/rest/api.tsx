import { cache } from 'react';
import { RestApiContext } from '@/types/restApi';

export const endpoint = process.env.REST_API_ENDPOINT;

export function baseUrl({ query }: { query?: string }): string {
  return `${endpoint}${query ? `/${query}` : ''}`;
}

export const getById = cache(async (id: string): Promise<RestApiContext> => {
  const res = await fetch(baseUrl({ query: id }), {
    next: { revalidate: 3600 },
  });
  return res.json();
});

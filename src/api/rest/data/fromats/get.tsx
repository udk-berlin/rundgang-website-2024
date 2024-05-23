import { getRestApiTreeFormatsQuery } from '@/api/rest/tree/api';

export async function getFormats() {
  const res = await fetch(getRestApiTreeFormatsQuery());

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

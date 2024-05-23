import { getRestApiTreeQuery, restApiFormatsRootId } from '@/api/rest/tree/api';

export function getRestApiTreeFormatsQuery(): string {
  if (typeof restApiFormatsRootId !== 'string') {
    throw new Error('formatsRootId must be a string');
  }

  return getRestApiTreeQuery(restApiFormatsRootId);
}

export async function fetchRestApiFormats() {
  return fetch(getRestApiTreeFormatsQuery());
}

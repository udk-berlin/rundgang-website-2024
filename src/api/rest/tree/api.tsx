import { getRestApiQuery } from '@/api/rest/api';

export const restApiFormatsRootId = process.env.REST_API_FORMATS_ROOT_ID;

export function getRestApiTreeFormatsQuery(): string {
  if (typeof restApiFormatsRootId !== 'string') {
    throw new Error('formatsRootId must be a string');
  }

  return getRestApiTreeQuery(restApiFormatsRootId);
}

export function getRestApiTreeQuery(id: string): string {
  return getRestApiQuery(`${id}/tree`);
}

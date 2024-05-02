import {getRestApiUrl} from "@/api/rest/api";

export const restApiFormatsRootId = process.env.REST_API_FORMATS_ROOT_ID

export function getRestApiTreeFormatsUrl(): string {
  if (typeof restApiFormatsRootId !== 'string') {
    throw new Error('formatsRootId must be a string');
  }

  return getRestApiTreeUrl(restApiFormatsRootId);
}

export function getRestApiTreeUrl(id: string): string {
  return getRestApiUrl(`${id}/tree`)
}
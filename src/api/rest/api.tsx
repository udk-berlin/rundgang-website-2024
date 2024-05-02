export const restApiEndpoint = process.env.REST_API_ENDPOINT;

export function getRestApiQuery(query: string): string {
  return `${restApiEndpoint}/${query}`;
}

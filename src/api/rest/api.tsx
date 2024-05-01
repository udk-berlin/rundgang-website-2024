export const restApiUrl = process.env.REST_API_URL

export function getRestApiUrl (query: string): string {
  return `${restApiUrl}/${query}`
}

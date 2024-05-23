import { fetchRestApiFormats } from '@/api/rest/formats/fetch';

export async function getRestApiFormats() {
  return fetchRestApiFormats()
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
}

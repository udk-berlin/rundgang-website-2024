import {getRestApiTreeFormatsUrl} from "@/api/rest/tree/api";

export async function fetchFormats() {
  const res = await fetch(getRestApiTreeFormatsUrl())

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

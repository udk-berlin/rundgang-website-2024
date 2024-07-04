export const defaultFetchCacheOptions: RequestInit = {
  cache: 'force-cache',
  next: { revalidate: 3600 },
};

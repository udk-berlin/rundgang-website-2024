export const defaultFetchCacheOptions: RequestInit = {
  next: { revalidate: 3600 },
};

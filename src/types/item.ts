import { Filter } from '@/types/types';

export type Item = {
  id: string;
  name: string;
  thumbnail?: string;
  thumbnail_full_size?: string;
  descriptions?: ItemDescription;
  languages?: string[];
  authors: string[];
  format?: Filter;
};

export type ItemDescription = { default: string } & { [key: string]: string };

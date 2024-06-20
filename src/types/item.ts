import { Filter } from '@/types/types';

export type ItemContent = {
  template: string;
  content: string;
  formatted_content: string;
};

export type Item = {
  id: string;
  name: string;
  thumbnail: string;
  thumbnail_full_size?: string;
  descriptions?: ItemDescription;
  languages?: string[];
  authors: string[];
  format?: Filter;
  content?: { [key: string]: ItemContent[] };
};

export type ItemDescription = { default: string } & { [key: string]: string };

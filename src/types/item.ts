import { Filter } from '@/types/types';
import { Entry } from '@/types/graphql';

export type ItemContent = {
  template: string;
  content: string;
  formatted_content: string;
};

export type ItemDescription = { default: string } & { [key: string]: string };

export type Item = {
  id: string;
  name: string;
  thumbnail: string;
  thumbnail_full_size?: string;
  descriptions?: ItemDescription;
  authors: string[];
  languages: Filter[];
  formats: Filter[];
  faculties: Filter[];
  parents: Entry[];
  content?: { [key: string]: ItemContent[] };
};


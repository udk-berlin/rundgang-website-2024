import { Language } from '@/types/types';
import { Entry } from '@/types/graphql';

export type ItemContentElement = {
  template: string;
  content: string;
  formatted_content: string;
};

export type ItemContent = { [key: string]: ItemContentElement[] };

export type ItemDescription = {
  language: Language;
  content: string | undefined;
};

export type Item = {
  id: string;
  name: string;
  thumbnail?: string;
  thumbnail_full_size?: string;
  descriptions?: ItemDescription[];
  authors: string[];
  languages: ItemFilterableContext[];
  formats: ItemFilterableContext[];
  faculties: ItemFilterableContext[];
  locations: ItemContext[];
  parents: Entry[];
  content?: ItemContent;
  times: ItemContext[];
  temporals: ItemTemporals[];
};

export type ItemContext = {
  id: string;
  template?: string;
  name: string;
};

export type ItemFilterableContext = ItemContext & {
  searchParam: 'format' | 'language' | 'faculty';
  exists?: boolean;
};

export type ItemTemporals = {
  start: Date;
  end: Date;
};

import { Context, GraphQlItem } from '@/types/graphql';
import { ReactNode } from 'react';

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LocalizesObject<T> = {
  de: T;
  en: T;
};

export type InfoItem = {
  id: string;
  title: string;
  text: string;
};

export type ReactNodeProps = {
  className?: string;
  children?: ReactNode;
};

export type LandingFilter = {
  header: LocalizesObject<string>;
  values: LocalizesObject<string>[];
};

export type Filters = {
  formats: Filter[];
  faculties: Filter[];
  languages: Filter[];
};

export type Filter = Pick<Context, 'id' | 'name' | 'item'> & {
  searchParam: 'format' | 'language' | 'faculty';
  exists?: boolean;
};

export type FilterHeader = {
  id: number;
  title: 'faculties' | 'formats' | 'languages';
};

export type Building = {
  id: string;
  name: string;
  image: number;
  maxZoom: number;
  labelPosition: string;
};

export type ContextTree = Context & {
  children: { [key: string]: ContextTree };
};

export type EventItem = GraphQlItem & {
  left: string;
  width: string;
};

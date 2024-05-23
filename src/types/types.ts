import { Context } from '@/types/graphql';
import { ReactNode } from 'react';

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LocalizesObject<T> = {
  de: T;
  en: T;
};

export type InfoItem = {
  id: number;
  title: string;
  content: string;
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

export type Filter = Pick<Context, 'id' | 'name'> & {
  searchParam: 'format' | 'language' | 'faculty';
  exists?: boolean;
};

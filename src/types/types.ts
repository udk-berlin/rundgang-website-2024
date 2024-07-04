import { Physical, Temporal, Context, Space } from '@/types/graphql';
import { ReactNode } from 'react';
import { RestApiContext } from './restApi';

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'm' | 'lg' | 'xl';

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

export type Filter = Pick<Context, 'id' | 'name'> & {
  searchParam: 'format' | 'language' | 'faculty';
  exists?: boolean;
  items?: string[];
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

export type EventItem = Space & {
  left: number;
  width: number;
  start: number;
  end: Date;
  allocation: {
    physical?: Physical[];
    temporal: {
      start: number;
      end: number;
    }[];
  };
  building: string;
  room: string;
  level: string;
};

export type Language = {
  iso: string;
  name: string;
};

export type LocationItem = {
  id: string;
  name: string;
  image: string;
  template: string;
  room: RestApiContext | null;
  level: RestApiContext | null;
  levels: ContextTree[];
  margin: string;
  rooms: ContextTree[] | null;
};

export type LocationSummary = RestApiContext & {
  building: RestApiContext;
  image: string;
  level: string;
  room: string;
};

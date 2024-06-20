import { Filter } from '@/types/types';

export type Space = {
  id: string;
  name?: string;
  type?: string;
  template?: string;
  thumbnail?: string;
  thumbnail_full_size?: string;
  parents?: Entry[];
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: string;
};

export type Origin = {
  application?: Application[];
  server?: Server[];
  authors: User[];
};

export type Description = {
  language: string;
  content?: string;
};

export type Allocation = {
  physical?: Physical[];
  temporal?: Temporal[];
};

export type Application = {
  name?: string;
};

export type Physical = {
  app?: string;
  lat?: string;
  lng?: string;
  info?: string;
  radius?: string;
  Path?: string[];
};

export type Temporal = {
  app: string;
  start?: string;
  end?: string;
  timestamp?: string;
  year?: string;
  month?: string;
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
};

export type Entry = Space & {
  id: string;
  type?: string;
  template?: string;
  name?: string;
  parents?: Entry[];
  content?: Content[];
  item?: GraphQlItem[];
  context?: Context[];
  thumbnail?: string;
  thumbnail_full_size?: string;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: string;
};

export type GraphQlItem = Space & {
  id: string;
  type: string;
  template: string;
  name: string;
  parents: Entry[];
  content: Content[];
  thumbnail: string;
  thumbnail_full_size: string;
  allocation: Allocation;
  origin: Origin;
  description: Description[];
  localDepth: string;
};

export type Context = Space & {
  id: string;
  type?: string;
  template?: string;
  name: string;
  parents?: Entry[];
  item?: GraphQlItem[];
  context?: Context[];
  content?: Content[];
  thumbnail?: string;
  thumbnail_full_size?: string;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: string;
};

export type GraphQlContexts = {
  contexts: Context[];
};

export type GraphQLFilters = {
  formats: Filter[];
  faculties: Filter[];
  centres: Filter[];
  languages: Pick<GraphQlItem, 'description'>[];
};

export type GraphQlItems = {
  items: GraphQlItem[];
};

export type Content = Space & {
  id: string;
  type?: string;
  template?: string;
  name?: string;
  parents?: Entry[];
  thumbnail?: string;
  thumbnail_full_size?: string;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: string;
};

export type User = {
  id: string;
  name?: string;
  server?: Server;
  thumbnail?: string;
  thumbnail_full_size?: string;
  context?: Context[];
  item?: GraphQlItem[];
  content?: Content[];
};

export type Server = {
  url: string;
  users?: User[];
  context?: Context[];
  item?: GraphQlItem[];
  content?: Content[];
};

export type Query = {
  entries(template?: string, type?: string): Entry[];
  entry(id: string): Entry;
  items(
    template?: string,
    pagination?: Boolean,
    offset?: number,
    start?: number,
  ): GraphQlItem[];
  item(id: string): GraphQlItem;
  contexts(template?: string): Context[];
  context(id: string): Context;
  contents: Content[];
  content(id: string): Content;
  servers: Server[];
  server(url: string): Server;
  users: User[];
  user(id: string): User;
};

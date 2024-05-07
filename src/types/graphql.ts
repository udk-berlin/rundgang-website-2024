export type Space = {
  id: String;
  name?: String;
  type?: String;
  template?: String;
  thumbnail?: String;
  thumbnail_full_size?: String;
  parents?: Entry[];
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: String;
};

export type Origin = {
  application?: Application[];
  server?: Server[];
  authors: User[];
};

export type Description = {
  language: String;
  content?: String;
};

export type Allocation = {
  physical?: Physical[];
  temporal?: Temporal[];
};

export type Application = {
  name?: String;
};

export type Physical = {
  app?: String;
  lat?: String;
  lng?: String;
  info?: String;
  radius?: String;
  Path?: String[];
};

export type Temporal = {
  app: String;
  start?: String;
  end?: String;
  timestamp?: String;
  year?: String;
  month?: String;
  day?: String;
  hour?: String;
  minute?: String;
  second?: String;
};

export type Entry = Space & {
  id: String;
  type?: String;
  template?: String;
  name?: String;
  parents?: Entry[];
  content?: Content[];
  item?: Item[];
  context?: Context[];
  thumbnail?: String;
  thumbnail_full_size?: String;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: String;
};

export type Item = Space & {
  id: String;
  type?: String;
  template?: String;
  name?: String;
  parents: Entry[];
  content?: Content[];
  thumbnail?: String;
  thumbnail_full_size?: String;
  allocation?: Allocation;
  origin: Origin;
  description?: Description[];
  localDepth?: String;
};

export type Items = {
  items: Item[];
};

export type Context = Space & {
  id: String;
  type?: String;
  template?: String;
  name?: String;
  parents?: Entry[];
  item?: Item[];
  context?: Context[];
  content?: Content[];
  thumbnail?: String;
  thumbnail_full_size?: String;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: String;
};

export type Content = Space & {
  id: String;
  type?: String;
  template?: String;
  name?: String;
  parents?: Entry[];
  thumbnail?: String;
  thumbnail_full_size?: String;
  allocation?: Allocation;
  origin?: Origin;
  description?: Description[];
  localDepth?: String;
};

export type User = {
  id: String;
  name?: String;
  server?: Server;
  thumbnail?: String;
  thumbnail_full_size?: String;
  context?: Context[];
  item?: Item[];
  content?: Content[];
};

export type Server = {
  url: String;
  users?: User[];
  context?: Context[];
  item?: Item[];
  content?: Content[];
};

export type Query = {
  entries(template?: String, type?: String): Entry[];
  entry(id: String): Entry;
  items(
    template?: String,
    pagination?: Boolean,
    offset?: number,
    start?: number,
  ): Item[];
  item(id: String): Item;
  contexts(template?: String): Context[];
  context(id: String): Context;
  contents: Content[];
  content(id: String): Content;
  servers: Server[];
  server(url: String): Server;
  users: User[];
  user(id: String): User;
};

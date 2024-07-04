import { cache } from 'react';
import { Filter, Filters } from '@/types/types';
import { Item } from '@/types/item';
import {
  restApiFormatsRoot,
  restApiStructureRootId,
  CENTRES_ROOT_ID,
} from '../constants';
import { getById } from './api';
import { getGraphQLLanguages } from '../graphql/filters';
import { getItemList } from './tree';

export const getFormats = cache(async () =>
  getById(restApiFormatsRoot()).then((res) =>
    Promise.all(
      Object.values(res.context).map(async (format) => ({
        ...format,
        items: await getItemList(format.id),
      })),
    ),
  ),
);

export const getFaculties = cache(async () =>
  getById(restApiStructureRootId()).then((res) =>
    Promise.all(
      Object.values(res.context)
        .filter((t) => t.template == 'faculty')
        .map(async (format) => ({
          ...format,
          items: await getItemList(format.id),
        })),
    ),
  ),
);
export const getCentres = cache(async () =>
  getById(CENTRES_ROOT_ID).then((res) =>
    Promise.all(
      Object.values(res.context).map(async (format) => ({
        ...format,
        items: await getItemList(format.id),
      })),
    ),
  ),
);

export const getFilters = cache(async () => {
  const formats = await getFormats();
  const faculties = await getFaculties();
  const centres = await getCentres();
  const gqlItems = await getGraphQLLanguages();
  return {
    formats: formats
      .filter((a) => a.items && a.items.length > 0)
      .map((a) => ({
        id: a.id,
        name: a.name,
        items: a.items,
        searchParam: 'format',
        exists: true,
      })),
    faculties: [...faculties, ...centres]
      .filter((a) => a.items && a.items.length > 0)
      .map((a) => ({
        id: a.id,
        name: a.name,
        items: a.items,
        searchParam: 'faculty',
        exists: true,
      })),
    languages: gqlItems.languages,
  } as Filters;
});

export const getExistingFilters = cache(
  async (
    items: Item[],
    searchParams: { [key: string]: string | string[] | undefined },
    returnOnlyExisting: boolean = false,
  ) => {
    return getFilters().then((filters) =>
      filterExisting(items, filters, searchParams, returnOnlyExisting),
    );
  },
);

function filterExisting(
  items: Item[],
  filters: Filters,
  searchParams: { [key: string]: string | string[] | undefined },
  returnOnlyExisting: boolean = false,
) {
  let filteredFormats = filters.formats.map((format: Filter) => ({
    ...format,
    exists:
      searchParams.format === format.id ||
      items.some((item) =>
        format.items.some((itemFormat) => itemFormat === item.id),
      ),
  }));

  let filteredFaculties = filters.faculties.map((faculty: Filter) => ({
    ...faculty,
    exists:
      searchParams.faculty === faculty.id ||
      items.some((item) =>
        faculty.items.some((itemFaculty) => itemFaculty === item.id),
      ),
  }));

  let filteredLanguages = filters.languages.map((language: Filter) => ({
    ...language,
    exists:
      searchParams.language === language.id ||
      items.some((item) =>
        item.languages.find((itemLanguage) => itemLanguage.id === language.id),
      ),
  }));

  return {
    formats: returnOnlyExisting
      ? filteredFormats.filter((f) => f.exists)
      : filteredFormats,
    faculties: returnOnlyExisting
      ? filteredFaculties.filter((f) => f.exists)
      : filteredFaculties,
    languages: returnOnlyExisting
      ? filteredLanguages.filter((f) => f.exists)
      : filteredLanguages,
  };
}

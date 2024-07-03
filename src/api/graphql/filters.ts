import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { GraphQLFilters, GraphQlItem } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import ISO6391 from 'iso-639-1';
import { Filter, Filters } from '@/types/types';
import { Item } from '@/types/item';

const graphQLFiltersQuery: DocumentNode = gql`
  {
    formats: contexts(template: "format-element") {
      id
      name
      item {
        id
      }
    }
    faculties: contexts(template: "faculty") {
      id
      name
      item {
        id
      }
    }
    centres: contexts(template: "centre") {
      id
      name
      item {
        id
      }
    }
    languages: items {
      description {
        language
      }
    }
  }
`;

async function fetchGraphQLFilters(): Promise<
  ApolloQueryResult<GraphQLFilters>
> {
  return getGraphQLClient().query({
    query: graphQLFiltersQuery,
    variables: {},
  });
}

export const getGraphQLFilters = cache(async () => {
  return fetchGraphQLFilters().then(
    (res) =>
      ({
        formats: res.data.formats
          .filter((a) => a.item && a.item.length > 0)
          .map((a) => ({
            id: a.id,
            name: a.name,
            searchParam: 'format',
            exists: true,
          })),
        faculties: [...res.data.faculties, ...res.data.centres]
          .filter((a) => a.item && a.item.length > 0)
          .map((a) => ({
            id: a.id,
            name: a.name,
            searchParam: 'faculty',
            exists: true,
          })),
        languages: Array.from(
          new Set(
            res.data.languages
              .map((item: Pick<GraphQlItem, 'description'>) =>
                item.description.map((d) => d.language),
              )
              .flat(1),
          ),
        )
          .map((language) => ({
            id: language.toLowerCase(),
            name: ISO6391.getNativeName(language.toLowerCase()) ?? language,
            searchParam: 'language',
            exists: true,
          }))
          .filter((l) => l.name != ''),
      }) as Filters,
  );
});

export const getExistingGraphQLFilters = cache(
  async (
    items: Item[],
    searchParams: { [key: string]: string | string[] | undefined },
    returnOnlyExisting: boolean = false,
  ) => {
    return getGraphQLFilters().then((filters) =>
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
        item.formats.some((itemFormat) => itemFormat.id === format.id),
      ),
  }));

  let filteredFaculties = filters.faculties.map((faculty: Filter) => ({
    ...faculty,
    exists:
      searchParams.faculty === faculty.id ||
      items.some((item) =>
        item.faculties.find((itemFaculty) => itemFaculty.id == faculty.id),
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

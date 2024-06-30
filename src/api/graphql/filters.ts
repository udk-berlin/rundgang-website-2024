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
  ) => {
    return getGraphQLFilters().then((filters) =>
      filterExisting(items, filters, searchParams),
    );
  },
);

function filterExisting(
  items: Item[],
  filters: Filters,
  searchParams: { [key: string]: string | string[] | undefined },
) {
  let filteredFormats = filters.formats.map((format: Filter) => ({
    ...format,
    exists: searchParams.format
      ? true
      : items.some((item) =>
          item.formats.some((format) => format.id === format.id),
        ),
  }));
  let filteredFaculties = filters.faculties.map((faculty: Filter) => ({
    ...faculty,
    exists: searchParams.faculty
      ? true
      : items.some((item) =>
          item.parents.find((parent) => parent.id == faculty.id),
        ),
  }));

  let filteredLanguages = filters.languages.map((language: Filter) => ({
    ...language,
    exists: searchParams.language
      ? true
      : items.some((item) =>
          item.languages.find((language) => language.id === language.id),
        ),
  }));

  return {
    formats: filteredFormats,
    faculties: filteredFaculties,
    languages: filteredLanguages,
  };
}

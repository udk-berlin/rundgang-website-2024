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
    }
    faculties: contexts(template: "faculty") {
      id
      name
    }
    centres: contexts(template: "centre") {
      id
      name
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
        formats: res.data.formats.map((a) => ({
          id: a.id,
          name: a.name,
          searchParam: 'format',
        })),
        faculties: [...res.data.faculties, ...res.data.centres].map((a) => ({
          id: a.id,
          name: a.name,
          searchParam: 'faculty',
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
            searchParam: 'lang',
          }))
          .filter((l) => l.name != ''),
      }) as Filters,
  );
});

export const getExistingGraphQLFilters = cache(async (items: Item[]) => {
  return getGraphQLFilters().then((filters) => filterExisting(items, filters));
});

function filterExisting(items: Item[], filters: Filters) {
  let filteredFormats = filters.formats.map((format: Filter) => ({
    ...format,
    exists: items.some((item) => item.format.id === format.id),
  }));

  let filteredFaculties = filters.faculties.map((faculty: Filter) => ({
    ...faculty,
    exists: true, // todo: items.some((item) => item.parents.find((parent) => parent.id == faculty.id),),
  }));

  let filteredLanguages = filters.languages.map((language: Filter) => ({
    ...language,
    exists: items.some((item) =>
      item.languages.find((languageId) => languageId === language.id),
    ),
  }));

  return {
    formats: filteredFormats,
    faculties: filteredFaculties,
    languages: filteredLanguages,
  };
}

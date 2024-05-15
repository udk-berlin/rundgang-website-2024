import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import {
  GraphQLFilters,
  Filters,
  Description,
  ProgramItem,
  Filter,
} from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import ISO6391 from 'iso-639-1';

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

function filterExisting(items: ProgramItem[], filter: Filters) {
  let filteredFormats = filter.formats.map((format: Filter) => ({
    ...format,
    exists: items.some((item) =>
      item.parents.find((parent) => parent.id == format.id),
    ),
  }));
  let filteredFaculties = filter.faculties.map((faculty: Filter) => ({
    ...faculty,
    exists: items.some((item) =>
      item.parents.find((parent) => parent.id == faculty.id),
    ),
  }));
  let filteredLanguages = filter.languages.map((language: Filter) => ({
    ...language,
    exists: items.some((item) =>
      item.description.find((desc) => desc.language == language.id),
    ),
  }));

  return {
    formats: filteredFormats,
    faculties: filteredFaculties,
    languages: filteredLanguages,
  };
}

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
        formats: res.data.formats.map((a) => ({ ...a, searchParam: 'format' })),
        faculties: [...res.data.faculties, ...res.data.centres].map((a) => ({
          ...a,
          searchParam: 'faculty',
        })),
        languages: Object.keys(
          res.data.languages.reduce(
            (
              langs: { [key: string]: any },
              item: { description: Description[] },
            ) => ({
              ...langs,
              ...item.description.reduce(
                (o, l) => ({ [l.language]: l.language }),
                {},
              ),
            }),
            {},
          ),
        ).map((lang) => ({
          id: lang,
          name: ISO6391.getNativeName(lang.toLowerCase()) ?? lang,
          searchParam: 'language',
        })),
      }) as Filters,
  );
});

export const getExistingGraphQLFilters = cache(async (items: ProgramItem[]) => {
  return getGraphQLFilters().then((filters) => filterExisting(items, filters));
});

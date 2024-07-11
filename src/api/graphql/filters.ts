import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { GraphQLFilters, GraphQlItem } from '@/types/graphql';
import { getClient } from '@/api/graphql/api';
import { cache } from 'react';
import ISO6391 from 'iso-639-1';
import { Filter, Filters } from '@/types/types';
import { Item } from '@/types/item';

const graphQLFiltersQuery: DocumentNode = gql`
  {
    languages: items {
      description {
        language
      }
    }
  }
`;

async function fetchGraphQLLanguages(): Promise<
  ApolloQueryResult<GraphQLFilters>
> {
  return getClient().query({
    query: graphQLFiltersQuery,
    variables: {},
    context: {
      fetchOptions: {
        next: { revalidate: 600 },
      },
    },
  });
}

export const getGraphQLLanguages = cache(async () => {
  return fetchGraphQLLanguages().then(
    (res) =>
      ({
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

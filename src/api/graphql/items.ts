import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { Items, Item } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';

const graphQLItemsQuery: DocumentNode = gql`
  query Items {
    items {
      id
      name
      thumbnail
      origin {
        authors {
          name
        }
      }
      parents {
        id
        name
      }
    }
  }
`;

async function fetchGraphQLItems(): Promise<ApolloQueryResult<Items>> {
  return getGraphQLClient().query({
    query: graphQLItemsQuery,
    variables: {},
  });
}

export const getGraphQLItems = cache(async () => {
  return fetchGraphQLItems().then((res) =>
    res.data.items.map((item: Item) => ({
      ...item,
      authors: item.origin.authors
        .map((a) => a.name)
        .slice(0, 5)
        .join(', '),
      format: { id: item.parents[0], name: 'test' },
    })),
  );
});

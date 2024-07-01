import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export const graphqlApiEndpoint = process.env.GRAPHQL_API_ENDPOINT;
let client: undefined | ApolloClient<NormalizedCacheObject>;

export function getGraphQLClient(): ApolloClient<NormalizedCacheObject> {
  if (typeof graphqlApiEndpoint !== 'string') {
    throw new Error('graphqlApiEndpoint must be a string');
  }

  if (!client) {
    client = new ApolloClient({
      uri: graphqlApiEndpoint,
      cache: new InMemoryCache(),
      queryDeduplication: true,
    });
  }

  return client;
}

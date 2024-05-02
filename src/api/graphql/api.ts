import {ApolloClient, InMemoryCache} from "@apollo/client";

export const graphqlApiEndpoint = process.env.GRAPHQL_API_ENDPOINT;
let client: undefined | any;

export function useGraphQLClient(): any {
  if (typeof graphqlApiEndpoint !== 'string') {
    throw new Error('graphqlApiEndpoint must be a string');
  }

  if (!client) {
    client = new ApolloClient({
      uri: graphqlApiEndpoint,
      cache: new InMemoryCache(),
    });
  }

  return client;
}

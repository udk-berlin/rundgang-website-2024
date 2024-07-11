import { HttpLink, NormalizedCacheObject } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

export const graphqlApiEndpoint = process.env.GRAPHQL_API_ENDPOINT;
let client: undefined | ApolloClient<NormalizedCacheObject>;

/* export function getGraphQLClient(): ApolloClient<NormalizedCacheObject> {
  if (typeof graphqlApiEndpoint !== 'string') {
    throw new Error('graphqlApiEndpoint must be a string');
  }

  if (!client) {
    client = new ApolloClient({
      link: new HttpLink({
        uri: graphqlApiEndpoint,
      }),
      cache: new InMemoryCache(),
      queryDeduplication: true,
    });
  }

  return client;
} */

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: graphqlApiEndpoint,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
    queryDeduplication: true,
  });
});

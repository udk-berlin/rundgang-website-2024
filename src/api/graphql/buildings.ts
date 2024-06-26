import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { GraphQlContexts, Context } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import { Building } from '@/types/types';
import { LOCATION_INFO } from '../constants';

const graphQLContextsQuery: DocumentNode = gql`
  query Contexts {
    contexts(template: "location-building") {
      id
      name
      template
      allocation {
        physical {
          lat
          lng
        }
      }
    }
  }
`;

async function fetchGraphQLContexts(): Promise<
  ApolloQueryResult<GraphQlContexts>
> {
  return getGraphQLClient().query({
    query: graphQLContextsQuery,
    variables: {},
  });
}

export const getBuildings: () => Promise<
  GeoJSON.FeatureCollection<GeoJSON.Point, Building>
> = cache(async () => {
  return fetchGraphQLContexts().then((res) => ({
    type: 'FeatureCollection',
    features: res.data.contexts.map(
      (loc: Context, index): GeoJSON.Feature<GeoJSON.Point, Building> => {
        const coords =
          loc.id in LOCATION_INFO
            ? [LOCATION_INFO[loc.id].lng, LOCATION_INFO[loc.id].lat]
            : loc?.allocation?.physical &&
                loc.allocation.physical[0].lat &&
                loc.allocation.physical[0].lng
              ? [
                  parseFloat(loc.allocation.physical[0].lng),
                  parseFloat(loc.allocation.physical[0].lat),
                ]
              : [0, 0];
        return {
          id: loc.id,
          type: 'Feature',
          properties: {
            id: loc.id,
            name: loc.name,
            image:
              loc.id in LOCATION_INFO ? LOCATION_INFO[loc.id].image : index + 1,
            maxZoom:
              loc.id in LOCATION_INFO ? LOCATION_INFO[loc.id].maxZoom : 17,
            labelPosition:
              loc.id in LOCATION_INFO
                ? LOCATION_INFO[loc.id].labelPosition
                : 'bottom-8 right-8',
          },
          geometry: {
            type: 'Point',
            coordinates: coords,
          },
        };
      },
    ),
  }));
});

import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { GraphQlItems, GraphQlItem, Description } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import { Item } from '@/types/item';
import { extractAuthors } from '@/lib/data/utils';

const graphQLItemsQuery: DocumentNode = gql`
  query Items {
    items {
      id
      name
      thumbnail
      thumbnail_full_size
      description {
        language
      }
      origin {
        authors {
          name
        }
      }
      parents {
        id
        name
        template
      }
    }
  }
`;

async function fetchGraphQLItems(): Promise<ApolloQueryResult<GraphQlItems>> {
  return getGraphQLClient().query({
    query: graphQLItemsQuery,
    variables: {},
  });
}

export const getGraphQLItems = cache(async () => {
  return fetchGraphQLItems().then((res) =>
    res.data.items.map((item: GraphQlItem): Item => {
      const format = item.parents.filter(
        (p) => p.template === 'format-element',
      )[0];

      return {
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail,
        languages: item.description.map((d: Description) =>
          d.language.toLowerCase(),
        ),
        authors: extractAuthors({ item }),
        format: {
          id: format?.id ?? '',
          name: format?.name ?? '',
          searchParam: 'format',
        },
      };
    }),
  );
});

export const getFilteredGraphQLItems = cache(
  async (searchParams: { [key: string]: string | string[] | undefined }) => {
    return getGraphQLItems().then((items) =>
      filterItemsBySearchParams(items, searchParams),
    );
  },
);

function filterItemsBySearchParams(
  items: Item[],
  searchParams: { [key: string]: string | string[] | undefined },
) {
  let filteredItems: Item[] = items;

  if (searchParams?.faculty) {
    filteredItems = filteredItems.filter(
      (item) => true, // todo: item.parents.find((parent) => parent.id == searchParams?.faculty),
    );
  }

  if (searchParams?.format) {
    filteredItems = filteredItems.filter(
      (item) => item.format.id == searchParams?.format,
    );
  }

  if (searchParams?.language) {
    filteredItems = filteredItems.filter((item: Item) =>
      item.languages.find((language) => language == searchParams?.language),
    );
  }

  return filteredItems;
}

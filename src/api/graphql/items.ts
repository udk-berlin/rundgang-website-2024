import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { Items, ProgramItem, Item } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';

const graphQLItemsQuery: DocumentNode = gql`
  query Items {
    items {
      id
      name
      thumbnail
      template
      type
      parents {
        id
        name
      }
      origin {
        authors {
          name
        }
      }
      description {
        language
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

function filterByParams(
  list: ProgramItem[],
  searchParams: { [key: string]: string | string[] | undefined },
) {
  let filteredList: ProgramItem[] = list;
  if (searchParams?.faculty) {
    filteredList = filteredList.filter((item: Item) =>
      item.parents.find((parent) => parent.id == searchParams?.faculty),
    );
  }

  if (searchParams?.format) {
    filteredList = filteredList.filter((item: Item) =>
      item.parents.find((parent) => parent.id == searchParams?.format),
    );
  }

  if (searchParams?.language) {
    filteredList = filteredList.filter((item: Item) =>
      item.description.find((desc) => desc.language == searchParams?.language),
    );
  }

  return filteredList;
}

export const getGraphQLItems = cache(async () => {
  return fetchGraphQLItems().then((res) =>
    res.data.items.map((item: Item) => ({
      ...item,
      authors: item.origin.authors
        .map((a) => a.name)
        .slice(0, 5)
        .join(', '),
      format: {
        id: item.parents[0].id ?? '',
        name: item.parents[0].name ?? '',
        searchParam: 'format',
      },
    })),
  );
});

export const getFilteredGraphQLItems = cache(
  async (searchParams: { [key: string]: string | string[] | undefined }) => {
    return getGraphQLItems().then((list) => filterByParams(list, searchParams));
  },
);

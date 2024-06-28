import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { GraphQlItems, GraphQlItem, Description } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import { Item } from '@/types/item';
import { extractAuthors } from '@/lib/data/utils';
import { getLocationItems } from '../rest/location';
import ISO6391 from 'iso-639-1';

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
      const formats = item.parents.filter(
        (p) => p.template === 'format-element',
      );

      const faculties = item.parents.filter(
        (p) => p.template === 'faculty' || p.template === 'centre',
      );

      return {
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail,
        parents: item.parents,
        languages: item.description
          .filter(
            (description: Description) =>
              description.language.toLowerCase() !== 'default',
          )
          .map((description: Description) => {
            return {
              id: description.language.toLowerCase(),
              name: ISO6391.getNativeName(description.language.toLowerCase()),
              searchParam: 'language',
              content: description.content,
            };
          }),
        authors: extractAuthors({ item }),
        formats: formats.map((format) => {
          return {
            id: format?.id ?? '',
            name: format?.name ?? '',
            searchParam: 'format',
          };
        }),
        faculties: faculties.map((faculty) => {
          return {
            id: faculty?.id ?? '',
            name: faculty?.name ?? '',
            searchParam: 'faculty',
          };
        }),
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

export const getFilteredGraphQLLocationItems = cache(
  async (
    searchParams: { [key: string]: string | undefined },
    place: string,
  ) => {
    const locationItems = await getLocationItems(place);
    return getGraphQLItems()
      .then((items) => items.filter((item) => locationItems.includes(item.id)))
      .then((items) => filterItemsBySearchParams(items, searchParams));
  },
);

function filterItemsBySearchParams(
  items: Item[],
  searchParams: { [key: string]: string | string[] | undefined },
) {
  let filteredItems: Item[] = items;

  if (searchParams?.faculty) {
    filteredItems = filteredItems.filter((item) =>
      item.faculties.find((faculty) => faculty.id == searchParams?.faculty),
    );
  }

  if (searchParams?.format) {
    filteredItems = filteredItems.filter((item) =>
      item.formats.find((format) => format.id == searchParams?.format),
    );
  }

  if (searchParams?.language) {
    filteredItems = filteredItems.filter((item: Item) =>
      item.languages.find((language) => language.id == searchParams?.language),
    );
  }

  return filteredItems;
}

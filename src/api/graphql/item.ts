import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client';
import { Description, GraphQlItem } from '@/types/graphql';
import { getGraphQLClient } from '@/api/graphql/api';
import { cache } from 'react';
import ISO6391 from 'iso-639-1';
import { extractAuthors } from '@/lib/data/utils';
import { Item, ItemDescription } from '@/types/item';

const graphQLItemQuery: DocumentNode = gql`
  query Item($id: String!) {
    item(id: $id) {
      id
      name
      thumbnail_full_size
      description {
        language
        content
      }
      parents {
        id
        name
        template
      }
    }
  }
`;

async function fetchGraphQLItem({
  id,
}: {
  id: string;
}): Promise<ApolloQueryResult<{ item: GraphQlItem }>> {
  return getGraphQLClient().query({
    query: graphQLItemQuery,
    variables: { id },
  });
}

export const getGraphQLItem = cache(
  async ({ id }: { id: string }): Promise<Item> => {
    return fetchGraphQLItem({ id }).then((res) => {
      const item = res.data.item;

      const descriptions: ItemDescription[] = item.description
        .filter(
          (description: Description) =>
            description.language.toLowerCase() !== 'default',
        )
        .map((description: Description) => {
          return {
            language: {
              iso: description.language.toLowerCase(),
              name: ISO6391.getNativeName(description.language.toLowerCase()),
            },
            content: description.content,
          };
        });

      const formats = item.parents.filter(
        (p) => p.template === 'format-element',
      );

      return {
        id: item.id,
        name: item.name,
        thumbnail_full_size: item.thumbnail_full_size,
        descriptions: descriptions,
        languages: descriptions.map((description: ItemDescription) => {
          return {
            id: description.language.iso,
            name: description.language.name,
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
      };
    });
  },
);

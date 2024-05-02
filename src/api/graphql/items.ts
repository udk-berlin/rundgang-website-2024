import {cache} from "react";

export const getGraphQLProgram = cache(async () => {
  const headers = {
    "content-type": "application/json",
  };
  const graphqlQuery = {
    operationName: "fetchProgram",
    query: `query fetchProgram {
    items {
      id
      name
      thumbnail
      template
      type
      allocation {
        temporal {
          start
          end
        }
      }
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
  }`,
    variables: {},
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(process.env.GRAPHQL, options);
  const data = await response.json();

  return data.data.items;
});
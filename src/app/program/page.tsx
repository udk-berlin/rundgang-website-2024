import { cache } from "react";
import ProgramPageComponent from "@/components/compositions/ProgramPage.server";

export const getProgram = cache(async (id: string) => {
  const res = await fetch(
    `https://2023.api.rundgang.udk-berlin.de/api/v2/!qfrjabHDUXieMVAzFt:content.udk-berlin.de/fullList/filter/type/item`
  );
  return res.json();
});

export const getGraphQLProgram = cache(async (id: string) => {
  const endpoint = "https://2023.api.rundgang.udk-berlin.de/graphql";
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

  const response = await fetch(endpoint, options);
  const data = await response.json();

  return data.data.items;
});

export default async function ProgramsPage(props: any) {
  const program = await getGraphQLProgram();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProgramPageComponent program={program} />
      </div>
    </main>
  );
}

import ProgramPage from "@/app/program/components";

// export async function getProgramData() {
//   const res = await fetch('https://2023.api.rundgang.udk-berlin.de/api/v2/!BTcywpcJQUsfkBptcB:content.udk-berlin.de/fullTree')
//
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//
//   return res.json()
// }

export default async function Program() {
  return <ProgramPage />;
}

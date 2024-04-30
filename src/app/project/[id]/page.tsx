import { cache } from "react";
import ProjectPageComponent from "./ProjectPage.server";

export const getProject = cache(async (id: string) => {
  const res = await fetch(
    `https://2023.api.rundgang.udk-berlin.de/api/v2/${id}`
  );
  return res.json();
});

export default async function ProjectsPage(props: { params: { id: string } }) {
  const project = await getProject(props.params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProjectPageComponent {...props} project={project} />
      </div>
    </main>
  );
}

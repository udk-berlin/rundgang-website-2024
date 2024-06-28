import Place from './place.server';
import ProgramPage from './program.server';
import Project from './project.server';

type LocationsPageProps = {
  params: { slug: string[] };
};

export default async function LocationsPage(props: LocationsPageProps) {
  const place = props.params.slug[0];
  const projectId = props.params.slug[1];

  return (
    <>
      <Place place={place} />
      {projectId ? (
        <Project projectId={projectId} />
      ) : (
        <ProgramPage place={place} />
      )}
    </>
  );
}

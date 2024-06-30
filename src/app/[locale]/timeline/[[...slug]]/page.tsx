import TimeTable from './components/timetable.server';
import Project from './components/project.server';

type TimelinesPageProps = {
  params: { slug: string[] };
};
export default async function TimelinesPage(props: TimelinesPageProps) {
  const projectId = props.params.slug ? props.params.slug[0] : null;
  return (
    <main className="flex h-content flex-col items-center justify-between overflow-y-scroll">
      <TimeTable />
      {projectId && <Project projectId={projectId} />}
    </main>
  );
}

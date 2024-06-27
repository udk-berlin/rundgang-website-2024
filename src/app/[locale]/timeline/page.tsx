import TimeTable from './components/timetable.server';

export default async function TimelinesPage(props: any) {
  return (
    <main className="flex h-content flex-col items-center justify-between overflow-y-scroll">
      <TimeTable />
    </main>
  );
}

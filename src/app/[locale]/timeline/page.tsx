import TimeTable from './components/timetable.server';

export default async function TimelinesPage(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <TimeTable />
    </main>
  );
}

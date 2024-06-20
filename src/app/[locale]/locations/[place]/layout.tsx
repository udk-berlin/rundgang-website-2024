import FilterBar from '@/components/filterBar';

export default function LocationsLayout({
  children,
  selected,
  program,
}: {
  children: React.ReactNode;
  selected: React.ReactNode;
  program: React.ReactNode;
}) {
  return (
    <main className="p-0">
      <FilterBar />
      <div className="grid grid-cols-1 xs:grid-cols-5">
        <div className="col-span-3">{children}</div>
        {program}
        {selected}
      </div>
    </main>
  );
}

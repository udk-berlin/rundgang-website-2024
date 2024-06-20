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
    <main className="h-content p-0">
      <FilterBar />
      <div className="h-locations grid grid-cols-1 xs:grid-cols-5">
        {children}
        {program}
        {selected}
      </div>
    </main>
  );
}

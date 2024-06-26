import FilterBar from '@/components/filterBar';

export default function ProgramLayout({
  children,
  selected,
  sidebar,
}: {
  children: React.ReactNode;
  selected: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <main className="h-content flex flex-col items-center justify-between p-0">
      <FilterBar />
      <div className="grid grid-cols-1 xs:grid-cols-5">
        {sidebar}
        {children}
        {selected}
      </div>
    </main>
  );
}

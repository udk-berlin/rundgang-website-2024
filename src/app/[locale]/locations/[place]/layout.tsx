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
    <main className="grid h-content grid-cols-1 p-0 xs:grid-cols-5">
      {children}
      {program}
      {selected}
    </main>
  );
}

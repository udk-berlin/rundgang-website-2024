export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex h-content max-h-content min-h-content flex-col overflow-x-hidden overflow-y-visible">
      {children}
    </main>
  );
}

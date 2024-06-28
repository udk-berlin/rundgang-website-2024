export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-content grid-cols-1 p-0 xs:grid-cols-5">
      {children}
    </div>
  );
}

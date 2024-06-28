import LocationsMap from './components/map/index.server';

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full bg-primary">
      <LocationsMap />
      {children}
    </div>
  );
}

'use client';
import { MapProvider } from 'react-map-gl/maplibre';

export default function MapProviderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MapProvider>{children}</MapProvider>;
}

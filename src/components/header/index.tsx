'use client';
import Filters from './filters';
import Navigation from './navigation';

export default function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 bg-primary">
      <Navigation />
      <Filters />
    </div>
  );
}
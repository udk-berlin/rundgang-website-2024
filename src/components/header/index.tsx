import { Suspense } from 'react';
import FilterBar from './filterBar';
import Navigation from './navigation';

export default function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-10 bg-primary">
      <Navigation />
      <Suspense>
        <FilterBar />
      </Suspense>
    </div>
  );
}

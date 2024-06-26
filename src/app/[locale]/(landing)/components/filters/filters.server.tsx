import {Suspense} from 'react';
import LandingFiltersGroups from "@/app/(landing)/components/filters/filtersGroups.server";
import {ReactNodeProps} from "@/types/types";

export default async function LandingFilters() {
  return (
    <LandingFiltersContainer>
        <Suspense>
          <LandingFiltersGroups />
        </Suspense>
    </LandingFiltersContainer>
  );
}


function LandingFiltersContainer({children}: ReactNodeProps) {
  return (
      <div className="relative bg-secondary">
        <div className="w-full grid grid-cols-3">
          {children}
        </div>
      </div>
  );
}
import { getLocationSummary } from '@/api/rest/location';
import Place from './components/place.server';
import ProgramPage from './components/program.server';
import Project from './components/project.server';
import LocationsMap from './components/map/index.server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

type LocationsPageProps = {
  params: { slug: string[] };
};

export const revalidate = 1000;

export async function generateMetadata({
  params,
}: LocationsPageProps): Promise<Metadata> {
  const t = await getTranslations('Locations');
  const place = params.slug ? decodeURIComponent(params.slug[0]) : null;
  if (place) {
    const location = await getLocationSummary(place);

    return {
      title: t('place_title', {
        template: location.template.replace('location-', ''),
        l: location.level,
        r: location.room,
        b: location.building.name,
      }),
      description: t('description'),
      openGraph: {
        images: [
          `/assets/svg/map/ground_plan/popup/${location?.image ?? 'simple'}.svg`,
        ],
      },
    };
  }
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocationsPage(props: LocationsPageProps) {
  const place = props.params.slug
    ? decodeURIComponent(props.params.slug[0])
    : null;
  const projectId =
    props.params.slug && props.params.slug?.length > 1
      ? decodeURIComponent(props.params.slug[1])
      : null;

  const locationSummary = await (place ? getLocationSummary(place) : null);

  return (
    <>
      <Suspense fallback="Loading...">
        <LocationsMap location={locationSummary} />
      </Suspense>
      <div className="grid h-content grid-cols-1 p-0 xs:grid-cols-5">
        {place && (
          <Suspense fallback="Loading...">
            <Place place={place} />
          </Suspense>
        )}
        {projectId ? (
          <Suspense fallback="Loading...">
            <Project projectId={projectId} />
          </Suspense>
        ) : (
          place && (
            <Suspense fallback="Loading...">
              <ProgramPage place={place} />
            </Suspense>
          )
        )}
      </div>
    </>
  );
}

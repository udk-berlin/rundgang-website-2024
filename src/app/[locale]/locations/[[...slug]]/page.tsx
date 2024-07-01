import { getLocation } from '@/api/rest/location';
import Place from './components/place.server';
import ProgramPage from './components/program.server';
import Project from './components/project.server';
import LocationsMap from './components/map/index.server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type LocationsPageProps = {
  params: { slug: string[] };
};

export async function generateMetadata({
  params,
}: LocationsPageProps): Promise<Metadata> {
  const t = await getTranslations('Locations');
  const place = params.slug ? decodeURIComponent(params.slug[0]) : null;
  if (place) {
    const location = await getLocation(place);
    return {
      title: location?.name ?? t('title'),
      description: t('description'),
      openGraph: {
        images: [`/assets/svg/popup/${location?.image ?? 'simple'}.svg`],
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
  const location = await getLocation(place);

  return (
    <>
      <LocationsMap location={location} />
      <div className="grid h-content grid-cols-1 p-0 xs:grid-cols-5">
        {location && <Place location={location} />}
        {projectId ? (
          <Project projectId={projectId} />
        ) : (
          place && <ProgramPage place={place} />
        )}
      </div>
    </>
  );
}

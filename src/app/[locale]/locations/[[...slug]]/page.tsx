import { getLocationSummary } from '@/api/rest/location';
import Place from './components/place.server';
import ProgramPage from './components/program.server';
import Project from './components/project.server';
import LocationsMap from './components/map/index.server';
import { Metadata, ResolvingMetadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type LocationsPageProps = {
  params: { slug: string[] | undefined; locale: string };
};

export const revalidate = 360;

export async function generateMetadata(
  { params: { locale, slug } }: LocationsPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Locations' });
  const place = slug ? decodeURIComponent(slug[0]) : null;
  const previousImages = (await parent).openGraph?.images || [];
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
          `/assets/ogimages/image-${location?.image ?? '9'}.png`,
          ...previousImages,
        ],
      },
    };
  }
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: previousImages,
    },
  };
}

export default async function LocationsPage(props: LocationsPageProps) {
  unstable_setRequestLocale(props.params.locale);
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
      <LocationsMap location={locationSummary} />
      <div className="grid h-content grid-cols-1 xs:grid-cols-5">
        {place && <Place place={place} />}
        {projectId ? (
          <Project projectId={projectId} />
        ) : (
          place && <ProgramPage place={place} />
        )}
      </div>
    </>
  );
}

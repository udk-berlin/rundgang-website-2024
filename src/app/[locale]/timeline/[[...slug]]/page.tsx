import TimeTable from './components/timetable.server';
import Project from './components/project.server';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type TimelinesPageProps = {
  params: { slug: string[] };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Timeline' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/ogimages/uk.png'],
    },
  };
}

export default async function TimelinesPage(props: TimelinesPageProps) {
  const projectId = props.params.slug ? props.params.slug[0] : null;
  return (
    <main className="flex h-content flex-col items-center justify-between overflow-y-scroll">
      <TimeTable />
      {projectId && <Project projectId={projectId} />}
    </main>
  );
}

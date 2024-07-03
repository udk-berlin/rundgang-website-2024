import type { Metadata } from 'next';
import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { getById } from '@/api/rest/api';
import { getTranslations } from 'next-intl/server';

export type ProjectsPageProps = {
  params: { id: string; locale: 'en' | 'de' };
};

export async function generateMetadata({
  params: { id, locale },
}: ProjectsPageProps): Promise<Metadata> {
  // read route params
  const item = await getById(decodeURIComponent(id));
  const t = await getTranslations({ locale, namespace: 'Project' });

  return {
    title: item.name,
    description: t('meta_description', {
      template: item.template,
      name: item.origin.authors.map((a) => a?.name).join(', '),
    }),
    openGraph: {
      images: [
        {
          url: item.thumbnail ?? '/assets/projects/de/writing.png',
          width: 800,
          height: 800,
          alt: 'project image',
        },
      ],
    },
  };
}

export default async function Page({ params }: ProjectsPageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return <Project item={item} />;
}

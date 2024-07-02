import type { Metadata } from 'next';
import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { getTranslations } from 'next-intl/server';

export type ProjectsPageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  // read route params
  const item = await getParsedItem(decodeURIComponent(params.id));
  const t = await getTranslations('Project');

  return {
    title: item.name,
    description: t('meta_description', t(item.template), item.name),
    openGraph: {
      images: [
        {
          url:
            item.thumbnail ??
            'https://www.udk-berlin.de/public/_processed_/c/a/csm_UdK_lang_4c_01b178ddaf.jpg',
          width: 400,
          height: 400,
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

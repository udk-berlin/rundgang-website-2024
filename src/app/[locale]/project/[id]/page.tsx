import type { Metadata } from 'next';
import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { getById } from '@/api/rest/api';
import { ReactNodeProps } from '@/types/types';

export type ProjectsPageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  // read route params
  const id = params.id;
  const project = await getById(id);

  return {
    title: project.name,
    description: project.template,
    openGraph: {
      images: [project.thumbnail_full_size],
    },
  };
}

export default async function Page({ params }: ProjectsPageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return (
    <PageContainer>
      <Project item={item} />
    </PageContainer>
  );
}

function PageContainer({ children }: ReactNodeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {children}
    </main>
  );
}

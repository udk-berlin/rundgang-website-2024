import type { Metadata } from 'next';
import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { getGraphQLItem } from '@/api/graphql/item';
import { getById } from '@/api/rest/api';

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

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const id = decodeURIComponent(params.id);
  const item = await getParsedItem(id);
  const graphQlItem = await getGraphQLItem({ id });
  item.descriptions = graphQlItem.descriptions;
  item.languages = graphQlItem.languages;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Project item={item} />
    </main>
  );
}

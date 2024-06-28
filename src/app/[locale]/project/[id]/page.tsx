import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Project item={item} />
    </main>
  );
}

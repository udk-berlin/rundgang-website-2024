import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const item = await getParsedItem(params.id);
  return <Project item={item} />;
}

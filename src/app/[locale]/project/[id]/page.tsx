import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { ReactNodeProps } from '@/types/types';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function Page({ params }: ProjectsPageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return <Project item={item} />;
}

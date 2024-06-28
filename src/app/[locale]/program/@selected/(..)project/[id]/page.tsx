import { getParsedItem } from '@/api/rest/item';
import Project from "@/app/program/@selected/(..)project/[id]/components/project.client";

export type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const item = await getParsedItem(params.id);
  return <Project item={item} />;
}


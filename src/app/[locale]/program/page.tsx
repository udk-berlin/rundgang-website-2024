import { getFilteredGraphQLItems } from '@/api/graphql/items';
import Program from '@/app/program/components/program.server';
import ProgramContainer from '@/app/program/components/container.client';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Program');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export const revalidate = 100;

export default async function Page({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  return (
    <ProgramContainer>
      <Program items={items} />
    </ProgramContainer>
  );
}

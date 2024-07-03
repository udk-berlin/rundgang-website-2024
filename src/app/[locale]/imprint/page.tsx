import Content from '@/components/modal/content.server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Imprint');
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/projects/hi/writing.png'],
    },
  };
}

export default async function Page(props: any) {
  return (
    <main className="border-x-border border-primary">
      <Content title="Imprint" />
    </main>
  );
}

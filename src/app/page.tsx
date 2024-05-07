import Landing from './landing/components/landing.server';

export type LandingPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function LandingPage({ searchParams }: LandingPageProps) {
  return <Landing searchParams={searchParams} />;
}

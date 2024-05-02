import Landing from './components/landing.server';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Landing />
      </div>
    </main>
  );
}

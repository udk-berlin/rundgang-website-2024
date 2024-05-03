import InfoPageComponent from './infoPage.server';

export default async function InfosPage(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <InfoPageComponent {...props} />
      </div>
    </main>
  );
}

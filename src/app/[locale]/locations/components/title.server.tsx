export default function BuildingTitle({ location }: any) {
  if (!location.name) {
    return <></>;
  }
  return (
    <div className="w-full max-w-[50vw] p-gutter-md text-lg font-bold">
      {location.name}
    </div>
  );
}

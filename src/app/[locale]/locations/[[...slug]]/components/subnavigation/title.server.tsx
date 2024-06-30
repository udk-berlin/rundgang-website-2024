export default function BuildingTitle({ location }: any) {
  if (!location.name) {
    return <></>;
  }
  return (
    <div className="h-fit w-3/4 text-lg font-bold sm:w-full">
      {location.name}
    </div>
  );
}

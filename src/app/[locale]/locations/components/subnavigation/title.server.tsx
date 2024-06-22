export default function BuildingTitle({ location }: any) {
  if (!location.name) {
    return <></>;
  }
  return <div className="h-fit w-full text-lg font-bold">{location.name}</div>;
}

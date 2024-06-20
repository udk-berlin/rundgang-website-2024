export default function LocationSubnavigation({ location }: any) {
  if (!location.name) {
    return <></>;
  }
  return (
    <div className="w-full max-w-[50vw] p-gutter-md text-lg font-medium">
      {location.name}
    </div>
  );
}

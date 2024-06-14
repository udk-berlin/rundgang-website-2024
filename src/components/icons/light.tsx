export type ArrowRightProps = {
  width?: number | string;
  height?: number | string;
};

export default function Light({
  width = '100%',
  height = '100%',
}: ArrowRightProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-secondary"
    >
      <path d="M32.9199 19.688H23.5119L30.2319 26.408L26.3279 30.184L19.6719 23.528V33L14.2319 32.936V23.528L7.51192 30.248L3.73592 26.344L10.3919 19.688H0.919922V14.248H10.3919L3.67192 7.52798L7.51192 3.68797L14.2319 10.408V0.935974H19.6719V10.408L26.3919 3.68797L30.2319 7.52798L23.5119 14.248H32.9199V19.688Z" />
    </svg>
  );
}

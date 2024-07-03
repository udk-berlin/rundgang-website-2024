import { ReactNodeProps } from '@/types/types';

export type ArrowRightProps = ReactNodeProps & {
  width?: number | string;
  height?: number | string;
};

export default function ArrowRight({
  className,
  width = '100%',
  height = '100%',
}: ArrowRightProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 11 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.96978L1.96978 0L10.8299 8.86017L8.86017 10.8299L8.85693 10.8267L1.96338 17.7203L0.00998597 15.7669L5.64307 10.1338V7.61284L0 1.96978Z" />
    </svg>
  );
}

import { ReactNodeProps } from '@/types/types';
import cx from 'classnames';

const fillMapper: { [key: string]: string } = {
  primary: 'black',
  secondary: 'white',
  highlight: '#00ffa1',
};

export type PlusProps = ReactNodeProps & {
  width?: number | string;
  height?: number | string;
  color?: 'primary' | 'secondary' | 'highlight';
};

export default function Cross({
  className,
  width = '100%',
  height = '100%',
  color = 'primary',
}: PlusProps) {
  return (
    <div className={cx('md:group-hover:invert', className)}>
      <svg
        className={cx('dark:invert')}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" width="2" height="16" fill={fillMapper[color]} />
        <rect
          y="9"
          width="2"
          height="16"
          transform="rotate(-90 0 9)"
          fill={fillMapper[color]}
        />
        <rect
          x="8"
          y="10.8281"
          width="4"
          height="4"
          transform="rotate(-135 8 10.8281)"
          fill={fillMapper[color]}
        />
      </svg>
    </div>
  );
}

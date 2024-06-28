import NextImage from 'next/image';
import cx from 'classnames';

export type ImageProps = {
  className?: string;
  src: string;
  alt?: string;
};

export default function Image({ className, src, alt }: ImageProps) {
  return (
    <NextImage
      src={src}
      height={500}
      width={500}
      alt={alt ?? 'thumbnail of student project'}
      className={cx('aspect-square w-full object-cover', className)}
      placeholder="empty"
    />
  );
}

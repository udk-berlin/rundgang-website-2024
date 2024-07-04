import NextImage from 'next/image';
import cx from 'classnames';

export type ImageProps = {
  className?: string;
  src: string | undefined;
  alt?: string;
};

export default function Image({ className, src, alt }: ImageProps) {
  return (
    <NextImage
      src={src && src != '' ? src : '/assets/placeholder.png'}
      height={500}
      width={500}
      alt={alt ?? 'Thumbnail of student project'}
      className={cx('aspect-square w-full rounded-md object-cover', className)}
      placeholder="empty"
    />
  );
}

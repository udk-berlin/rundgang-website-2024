import Image from 'next/image';
import cx from 'classnames';

export type ImageWrapperProps = {
  className?: string;
  src: string;
  alt?: string;
};

export default function ImageWrapper({
  className,
  src,
  alt,
}: ImageWrapperProps) {
  return (
    <Image
      src={src}
      height={500}
      width={500}
      alt={alt ?? 'thumbnail of student project'}
      className={cx(
        'aspect-square w-full max-w-[500px] object-cover md:max-w-[800px]',
        className,
      )}
      placeholder="empty"
    />
  );
}

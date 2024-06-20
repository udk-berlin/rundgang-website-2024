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
      height={100}
      width={500}
      alt={alt ?? 'thumbnail of student project'}
      className={cx(
        'w-full max-w-[400px] object-contain md:max-w-[800px]',
        className,
      )}
      placeholder="empty"
    />
  );
}

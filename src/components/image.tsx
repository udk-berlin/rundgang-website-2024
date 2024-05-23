import Image from 'next/image';
import cx from 'classnames';

export type ImageWrapperProps = {
  className?: string;
  src: string;
  alt?: string;
};
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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
      placeholder="blur"
      className={cx('w-full object-contain text-highlight', className)}
      blurDataURL={rgbDataURL(0, 255, 161)}
    />
  );
}

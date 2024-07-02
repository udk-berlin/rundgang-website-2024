import { Item } from '@/types/item';
import { ReactNodeProps } from '@/types/types';
import cx from 'classnames';

export type ProjectDetailNameProps = {
  item: Item;
} & ReactNodeProps;

export default function ProjectDetailName({
  className,
  item,
}: ProjectDetailNameProps) {
  return (
    <div className={cx('text-lg font-bold', className)}>
      {item.name}
    </div>
  );
}

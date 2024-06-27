import { EventItem } from '@/types/types';
import cx from 'classnames';

type EventBarProps = {
  event: EventItem;
};

export default async function EventBar({ event }: EventBarProps) {
  return (
    <div className={cx('absolute', event.left, event.width)}>{event.name}</div>
  );
}

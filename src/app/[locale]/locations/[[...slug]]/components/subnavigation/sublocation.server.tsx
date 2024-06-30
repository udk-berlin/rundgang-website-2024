import { getTranslations } from 'next-intl/server';
import SubLocationTag from './sublocationtag.server';
export type SubLocationProps = {
  sublocations: { name: string; id: string }[];
  prefix: string;
  selected?: string;
  title: string;
  backToAll: string;
};

export default async function SubLocation({
  title,
  sublocations,
  selected,
  prefix,
  backToAll,
}: SubLocationProps) {
  const t = await getTranslations('Locations');
  return (
    sublocations && (
      <div>
        <div className="px-1 pt-1 text-grey">{title}:</div>
        <div className="flex w-full flex-wrap justify-start">
          <SubLocationTag
            key={`sublocation-tag-${backToAll}`}
            sublocation={{ name: t('all'), id: backToAll }}
            prefix={''}
            isSelected={!selected}
          />
          {sublocations.map((item) => (
            <SubLocationTag
              key={`sublocation-tag-${item.id}`}
              sublocation={item}
              prefix={prefix}
              isSelected={item.id == selected}
            />
          ))}
        </div>
      </div>
    )
  );
}

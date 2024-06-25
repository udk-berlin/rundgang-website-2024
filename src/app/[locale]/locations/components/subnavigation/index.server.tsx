import { getTranslations } from 'next-intl/server';
import SubLocation from './sublocation.server';
import BuildingTitle from './title.server';

export default async function Subnavigation({ location }: any) {
  const t = await getTranslations('Locations');
  return (
    <div className="p-gutter-sm sm:w-1/2">
      <BuildingTitle location={location} />
      <SubLocation
        title={t('levels')}
        sublocations={location.levels}
        prefix={t('level')}
        selected={location.level?.id}
        backToAll={location.id}
      />
      {location.rooms && (
        <SubLocation
          title={t('rooms')}
          sublocations={location.rooms}
          prefix={t('room')}
          selected={location.room?.id}
          backToAll={location.level?.id}
        />
      )}
    </div>
  );
}

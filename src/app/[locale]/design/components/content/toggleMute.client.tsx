'use client';

import Mute from '@/components/icons/mute';
import Unmute from '@/components/icons/unmute';
import { useUIStore } from '@/lib/uiStore';
import { useTranslations } from 'next-intl';
import { useStore } from 'zustand';

export default function ToggleMute() {
  const t = useTranslations('Design');
  const toggleMute = useStore(useUIStore, (state) => state.toggleMute);
  return (
    <div className="my-auto flex h-header w-1/2">
      <MuteButton handleClick={() => toggleMute('mute')}>
        <div className="flex h-full items-end px-gutter-md py-gutter-xs text-xxs text-grey">
          {t('muteAll')}
        </div>
        <div className="flex h-full items-center px-gutter-md">
          <Mute width={25} height={25} />
        </div>
      </MuteButton>
      <MuteButton handleClick={() => toggleMute('unmute')}>
        <div className="flex h-full items-end px-gutter-md py-gutter-xs text-xxs text-grey">
          {t('unmuteAll')}
        </div>
        <div className="flex h-full items-center px-gutter-md">
          <Unmute width={25} height={25} />
        </div>
      </MuteButton>
    </div>
  );
}

export function MuteButton({ handleClick, children }) {
  return (
    <button
      className="flex h-full w-full justify-between rounded-border border-xs border-t-0 border-primary bg-secondary hover:bg-highlight hover:fill-black"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

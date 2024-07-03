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
        <span>{t('mute_all')}</span>
        <span>
          <Mute width={30} height={30} />
        </span>
      </MuteButton>
      <MuteButton handleClick={() => toggleMute('unmute')}>
        <span>{t('unmute_all')}</span>
        <span>
          <Unmute width={30} height={30} />
        </span>
      </MuteButton>
    </div>
  );
}

export function MuteButton({ handleClick, children }) {
  return (
    <button
      className="flex h-full w-full items-center justify-around rounded-md border-xs border-t-0 border-primary bg-secondary hover:bg-highlight hover:fill-black hover:text-black"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

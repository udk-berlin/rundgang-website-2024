import { create } from 'zustand';

export type TimelineStates = {
  isOpen: string | boolean;
  showThumbnail: string | boolean;
};

export type TimelineActions = {
  setIsOpen: (isOpen: string | boolean) => void;
  setShowThumbnail: (id: string | boolean) => void;
};

export type TimelineStore = TimelineStates & TimelineActions;

export const useTimelineStore = create<TimelineStore>((set) => ({
  isOpen: false,
  showThumbnail: false,
  setShowThumbnail: (id) => set(() => ({ showThumbnail: id })),
  setIsOpen: (isOpen) => set(() => ({ isOpen: isOpen })),
}));

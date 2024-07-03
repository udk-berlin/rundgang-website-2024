import { create } from 'zustand';

export type LandingSidebarStates = {
  isOpen: boolean;
};

export type LandingSidebarActions = {
  toggleIsOpen: () => void;
  onClose: () => void;
};

export type LandingSidebarStore = LandingSidebarStates & LandingSidebarActions;

export const useLandingSidebarStore = create<LandingSidebarStore>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  onClose: () => set(({ isOpen }) => ({ isOpen: false })),
}));

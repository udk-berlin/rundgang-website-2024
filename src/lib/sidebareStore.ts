import { create } from 'zustand';

export type SidebarStates = {
  isOpen: boolean;
};

export type SidebarActions = {
  toggleIsOpen: () => void;
};

export type SidebarStore = SidebarStates & SidebarActions;

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
}));

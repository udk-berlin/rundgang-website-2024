import { create } from 'zustand';

export type ProgrammSidebarStates = {
  isOpen: boolean;
};

export type ProgrammSidebarActions = {
  toggleIsOpen: () => void;
  onClose: () => void;
};

export type ProgrammSidebarStore = ProgrammSidebarStates &
  ProgrammSidebarActions;

export const useProgrammSidebarStore = create<ProgrammSidebarStore>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  onClose: () => set(({ isOpen }) => ({ isOpen: false })),
}));

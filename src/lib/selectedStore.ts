import { createStore } from 'zustand/vanilla';

type SelectedStore = {
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
}

export const useSelectedStore = () => {
  return createStore<SelectedStore>()((set) => ({
    isSelected: false,
    setIsSelected: (isSelected) => set(({ isSelected })),
  }));
};

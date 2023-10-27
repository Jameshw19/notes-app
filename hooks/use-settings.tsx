import { create } from "zustand";

type SettingsStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onOpen: () => ({ isOpen: true }),
  onClose: () => ({ isOpen: false }),
}));

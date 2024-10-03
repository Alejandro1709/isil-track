import { create } from "zustand";

type SelectStoreType = {
  status: string;
  setStatus(status: string): void;
};

export const useSelectStore = create<SelectStoreType>((set) => ({
  status: "not-started",
  setStatus: (status: string) => set(() => ({ status })),
}));

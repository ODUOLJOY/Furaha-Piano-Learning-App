import { create } from "zustand";

interface ProgressState {
  xp: number;
  level: number;

  addXP: (amount: number) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  xp: 0,
  level: 1,

  addXP: (amount) =>
    set((state) => {
      const xp = state.xp + amount;

      return {
        xp,
        level: Math.floor(xp / 100) + 1
      };
    })
}));
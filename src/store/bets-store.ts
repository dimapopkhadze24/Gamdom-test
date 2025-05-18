import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BetsStoreI } from "@/types";

export const useBetsStore = create<BetsStoreI>()(
  persist(
    (set) => ({
      bets: [],
      toggleBet: (bet) =>
        set((state) => {
          const existingBetIndex = state.bets.findIndex(
            (b) => b.EventOfferId === bet.EventOfferId
          );

          if (existingBetIndex !== -1) {
            // Remove bet if it already exists
            return {
              bets: state.bets.filter((_, index) => index !== existingBetIndex),
            };
          } else {
            // Add new bet
            return {
              bets: [...state.bets, bet],
            };
          }
        }),
      clearBets: () => set({ bets: [] }),
    }),
    {
      name: "bets", // unique name for localStorage
    }
  )
);

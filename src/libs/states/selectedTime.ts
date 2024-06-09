import { create } from "zustand";

type State = {
  selectedTime: Date;
  setSelectedTime: (selectedTime: Date) => void;
};

export const useSelectedTimeStore = create<State>((set) => ({
  selectedTime: new Date(),
  setSelectedTime: (selectedTime) => set({ selectedTime }),
}));

import { create, State } from "zustand";

type AuthStore = State & {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

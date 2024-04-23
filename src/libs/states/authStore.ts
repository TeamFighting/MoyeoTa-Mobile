import { create } from "zustand";

type AuthStore = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token:
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNSIsImV4cCI6MTcxMjg1MTEwMX0.q8Rnc5XAkVWDjbV5nMwurC1HOilol_BKVYPM_wvmnOI",
  setToken: (token) => set({ token }),
}));

import create from "zustand";

interface AuthStore {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authToken: null,
  setAuthToken: (token) => set({ authToken: token }),
}));

export default useAuthStore;

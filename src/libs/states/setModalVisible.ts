import { create } from "zustand";

type State = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export const useModalVisibleStore = create<State>((set) => ({
  modalVisible: false,
  setModalVisible: (modalVisible) => set({ modalVisible }),
}));

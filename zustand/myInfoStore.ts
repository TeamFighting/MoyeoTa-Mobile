// 받아온 내 정보 저장
import create from "zustand";

interface MyInfoState {
  myInfo: {
    id: string;
    loginId: string;
    name: string;
    profileImage: string | null;
    phoneNumber: string | null;
    email: string;
    status: boolean | null;
    averageStarRate: number;
    school: string | null;
    gender: boolean;
  };

  setMyInfo: (myInfo: any) => void;
}

export const useMyInfoStore = create<MyInfoState>((set) => ({
  myInfo: {
    id: "",
    loginId: "",
    name: "",
    profileImage: null,
    phoneNumber: null,
    email: "",
    status: null,
    averageStarRate: 0,
    school: null,
    gender: false,
  },
  setMyInfo: (myInfo) => set({ myInfo }),
}));

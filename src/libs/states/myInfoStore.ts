// 받아온 내 정보 저장
import { create } from "zustand";
import { MyInfoType } from "../types/types";

type MyInfoState = {
  myInfo: MyInfoType;
  setMyInfo: (myInfo: MyInfoType) => void;
};

export const useMyInfoStore = create<MyInfoState>((set) => ({
  myInfo: {
    age: "",
    averageStarRate: 0,
    email: "",
    gender: "",
    id: 0,
    loginId: "",
    name: "",
    nickname: "",
    phoneNumber: "",
    profileImage: "",
    school: "",
    status: false,
  },
  setMyInfo: (myInfo) => set((state) => ({ myInfo })),
}));

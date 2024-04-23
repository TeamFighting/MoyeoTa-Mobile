// 받아온 내 정보 저장
import { create } from "zustand";
import { MyInfoType } from "../types/types";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
type MyInfoState = {
  myInfo: MyInfoType;
  setMyInfo: (myInfo: MyInfoType) => void;
};

export const useMyInfoStore = create(
  persist<MyInfoState>(
    (set) => ({
      myInfo: {
        age: "",
        averageStarRate: 0,
        email: "",
        gender: "",
        id: 0,
        loginId: "",
        name: "",
        nickName: "",
        phoneNumber: "",
        profileImage: "",
        school: "",
        status: false,
      },
      setMyInfo: (myInfo) => set((state) => ({ myInfo })),
    }),
    {
      name: "myInfo-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

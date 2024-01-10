import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMyInfoStore } from "../../libs/states/myInfoStore";
import UserInfo from "./Components/UserInfo";
import FavoritePot from "./Components/FavoritePot";
import ManagementLists from "./Components/ManagementLists";

function MyPage() {
  getMyInfo();

  const Token = AsyncStorage.getItem("accessToken");

  async function getMyInfo() {
    try {
      const response = await axios.get("https://moyeota.shop/api/users", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
    } catch (e) {
      console.log("MyPage", e);
    }
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>내 정보</Text>
      </View>
      <View style={{ width: "100%", backgroundColor: "#eeeeee", height: 9 }} />
      <UserInfo />
      <View style={Styles.FavoritePotWrapper}>
        <FavoritePot />
      </View>
      <ManagementLists />
    </SafeAreaView>
  );
}

export default MyPage;

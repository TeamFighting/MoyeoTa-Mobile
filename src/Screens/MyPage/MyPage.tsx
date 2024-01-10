import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMyInfoStore } from "../../libs/states/myInfoStore";
import { useNavigation } from "@react-navigation/native";
import UserInfo from "./Components/UserInfo";
import FavoritePot from "./Components/FavoritePot";
import ManagementLists from "./Components/ManagementLists";

function MyPage() {
  useEffect(() => {
    getMyInfo();
  }, []);

  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const { myInfo, setMyInfo } = useMyInfoStore();

  const Token = AsyncStorage.getItem("accessToken");

  async function getMyInfo() {
    try {
      const response = await axios.get("https://moyeota.shop/api/users", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      console.log("HERE", response.data.data);
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
      <UserInfo myInfo={myInfo} />
      <View style={Styles.FavoritePotWrapper}>
        <FavoritePot />
      </View>
      <View style={Styles.TotalList}>
        <ManagementLists />
      </View>
    </SafeAreaView>
  );
}

export default MyPage;

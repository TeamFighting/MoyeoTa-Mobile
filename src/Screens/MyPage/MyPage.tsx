import React, { useEffect, useState } from "react";
import { Styles } from "./styles";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserInfo from "./Components/UserInfo";
import FavoritePot from "./Components/FavoritePot";
import ManagementLists from "./Components/ManagementLists";
import { useMyInfoStore } from "../../libs/states/myInfoStore";
import { useAuthStore } from "../../libs/states/authStore";

function MyPage() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>내 정보</Text>
      </View>
      <View style={Styles.ThickDivider} />
      <View>
        <UserInfo />
        <FavoritePot />
        <ManagementLists />
      </View>
    </SafeAreaView>
  );
}

export default MyPage;

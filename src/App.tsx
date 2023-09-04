import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./Screens/SignIn";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("../assets/font/Pretendard-Medium.otf"),
    PretedardBlack: require("../assets/font/Pretendard-Black.otf"),
    PretendardBold: require("../assets/font/Pretendard-Bold.otf"),
    PretendardExtraBold: require("../assets/font/Pretendard-ExtraBold.otf"),
    PretendardLight: require("../assets/font/Pretendard-Light.otf"),
    PretendardRegular: require("../assets/font/Pretendard-Regular.otf"),
    PretendardSemiBold: require("../assets/font/Pretendard-SemiBold.otf"),
  });

  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
});

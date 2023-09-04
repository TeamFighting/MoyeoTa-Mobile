import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Kakao from "./socialLogin/Kakao";
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

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kakao"
          component={Kakao}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
  },
});

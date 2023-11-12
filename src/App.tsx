import React from "react";
import { StyleSheet } from "react-native";
import Onboarding from "./components/Onboarding";
import Slogan from "./Screens/Slogan";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Kakao from "./Screens/SignIn/socialLogin/Kakao";
import SignIn from "./Screens/SignIn/SignIn";
import Naver from "./Screens/SignIn/socialLogin/Naver";
import Guide from "./Screens/Guide";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import Google from "./Screens/SignIn/socialLogin/Google";
import CreateProfile from "./Screens/CreatePot/CreateProfile";
import CreatePot from "./Screens/CreatePot/CreatePot";
import SchoolLogin from "./Screens/SignIn/schoolLogin/schoolLoginGuide";
import SchoolLoginSelect from "./Screens/SignIn/schoolLogin/schoolLoginSelect";
import InputLogin from "./Screens/SignIn/schoolLogin/inputLogin";
import EmailAuth from "./Screens/SignIn/schoolLogin/emailAuth";
import EmailSuccess from "./Screens/SignIn/schoolLogin/emailSuccess";
import SchoolList from "./Screens/SignIn/schoolLogin/schoolList";
import BottomTab from "./Screens/BottomTab/BottomTab";
import { useAuthStore } from "../zustand/authStore";

const loadFonts = async () => {
  await Font.loadAsync({
    Pretendard: require("../assets/font/Pretendard-Medium.otf"),
    PretedardBlack: require("../assets/font/Pretendard-Black.otf"),
    PretendardBold: require("../assets/font/Pretendard-Bold.otf"),
    PretendardExtraBold: require("../assets/font/Pretendard-ExtraBold.otf"),
    PretendardLight: require("../assets/font/Pretendard-Light.otf"),
    PretendardRegular: require("../assets/font/Pretendard-Regular.otf"),
    PretendardSemiBold: require("../assets/font/Pretendard-SemiBold.otf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await SplashScreen.preventAutoHideAsync();

      await loadFonts();
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 3000);
      setIsReady(true);
    };
    initialize();
  }, []);

  if (!isReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  console.log("useAuthStore", useAuthStore.getState().token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          useAuthStore.getState().token === null ? "Slogan" : "Mainpage"
        }
      >
        <Stack.Screen
          name="Slogan"
          component={Slogan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="Naver"
          component={Naver}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Google"
          component={Google}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Guide"
          component={Guide}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePot"
          component={CreatePot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SchoolLogin"
          component={SchoolLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SchoolLoginSelect"
          component={SchoolLoginSelect}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputLogin"
          component={InputLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailAuth"
          component={EmailAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailSuccess"
          component={EmailSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SchoolList"
          component={SchoolList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

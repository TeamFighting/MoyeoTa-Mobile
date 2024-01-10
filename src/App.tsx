import React from "react";
import { StyleSheet } from "react-native";
import Onboarding from "./components/Onboarding";
import Slogan from "./Screens/Slogan";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Kakao from "./Screens/SignIn/SocialLogin/Kakao";
import SignIn from "./Screens/SignIn";
import Naver from "./Screens/SignIn/SocialLogin/Naver";
import Guide from "./Screens/Guide";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import Google from "./Screens/SignIn/SocialLogin/Google";
import CreateProfile from "./Screens/CreatePotPage/CreateProfile";
import CreatePot from "./Screens/CreatePotPage/CreatePot";
import SchoolLogin from "./Screens/SignIn/SchoolLogin/SchoolLoginGuide";
import SchoolLoginSelect from "./Screens/SignIn/SchoolLogin/schoolLoginSelect";
import InputLogin from "./Screens/SignIn/SchoolLogin/InputLogin";
import EmailAuth from "./Screens/SignIn/SchoolLogin/EmailAuth";
import EmailSuccess from "./Screens/SignIn/SchoolLogin/EmailSuccess";
import SchoolList from "./Screens/SignIn/SchoolLogin/SchoolList";
import BottomTab from "./Screens/BottomTab/BottomTab";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UpdateProfile from "./Screens/MyPage/UpdateProfilePage";
import ManageAccountPage from "./Screens/MyPage/ManageAccountPage";

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
  const [token, setToken] = useState("");
  const [isTokenReady, setIsTokenReady] = useState(false);

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

    AsyncStorage.getItem("accessToken", (err, result) => {
      if (result) setToken(result);
      setIsTokenReady(true);
    });
  }, []);

  if (!isReady || !isTokenReady) {
    return null;
  } else {
    console.log(token.length == 0);
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={token.length == 0 ? "Slogan" : "Main"}
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
          <Stack.Screen
            name="ManageAccountPage"
            component={ManageAccountPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UpdateProfile"
            component={UpdateProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

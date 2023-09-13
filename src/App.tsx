import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Onboarding from "./components/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Kakao from "./socialLogin/Kakao";
import SignIn from "./Screens/SignIn";
import axios from "axios";
import Naver from "./socialLogin/Naver";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

const loadFonts = () => {
  return Font.loadAsync({
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
    const inialize = async () => {
      await SplashScreen.preventAutoHideAsync();

      await loadFonts();
      await SplashScreen.hideAsync();

      setIsReady(true);
    };
    inialize();

    setTimeout(() => {}, 2000);
  }, []);

  if (!isReady) {
    return null;
  }

  // const [fontsLoaded] = useFonts({
  //   Pretendard: require("../assets/font/Pretendard-Medium.otf"),
  //   PretedardBlack: require("../assets/font/Pretendard-Black.otf"),
  //   PretendardBold: require("../assets/font/Pretendard-Bold.otf"),
  //   PretendardExtraBold: require("../assets/font/Pretendard-ExtraBold.otf"),
  //   PretendardLight: require("../assets/font/Pretendard-Light.otf"),
  //   PretendardRegular: require("../assets/font/Pretendard-Regular.otf"),
  //   PretendardSemiBold: require("../assets/font/Pretendard-SemiBold.otf"),
  // });
  // if (!fontsLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
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

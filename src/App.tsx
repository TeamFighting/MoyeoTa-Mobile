import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SignIn from "./Screens/SignIn";
import { useFonts } from "expo-font";
import Onboarding from "./components/Onboarding";

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
      <Onboarding />
    </View>
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

import { NavigationProp } from "@react-navigation/core";
import axios from "axios";
import { useAuthStore } from "../../../../zustand/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface OAuth2RedirectHandlerProps {
  data: string;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  from: string;
}

async function requestToken(
  code: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>,
  from: string
) {
  if (from === "Kakao") {
    axios
      .post("https://54.180.20.255/api/users/kakao", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("res", response);
        if (response.data && response.data.data.accessToken) {
          const token = response.data.data.accessToken;
          useAuthStore.getState().setToken(token);
          AsyncStorage.setItem("accessToken", token);
          navigation.navigate("Guide" as never);
        } else {
          console.log("유효하지 않은 토큰");
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  } else if (from === "Google") {
    axios
      .post("https://54.180.20.255/api/users/google", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("res", response);
        if (response.data && response.data.data.accessToken) {
          const token = response.data.data.accessToken;
          useAuthStore.getState().setToken(token);
          AsyncStorage.setItem("accessToken", token);
          navigation.navigate("Guide" as never);
        } else {
          console.log("유효하지 않은 토큰");
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  } else if (from === "Naver") {
    axios
      .post("https://54.180.20.255/api/users/naver", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("res", response.data.data.refreshToken);
        if (response.data && response.data.data.accessToken) {
          const token = response.data.data.accessToken;
          useAuthStore.getState().setToken(token);
          AsyncStorage.setItem("accessToken", token);
          navigation.navigate("Guide" as never);
        } else {
          console.log("유효하지 않은 토큰");
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  }
}

function OAuth2RedirectHandler({
  data,
  navigation,
  from,
}: OAuth2RedirectHandlerProps) {
  const exp = "code=";
  const condition = data.indexOf(exp);

  if (condition !== -1) {
    console.log("data", data);
    const requestCode = data.substring(condition + exp.length).split("&")[0];
    requestToken(requestCode, navigation, from);
    console.log("requestCode", requestCode);
  }
}

export default OAuth2RedirectHandler;

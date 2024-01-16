import { NavigationProp } from "@react-navigation/core";
import axios from "axios";
import { useAuthStore } from "../../../libs/states/authStore";
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
      .post("https://moyeota.shop/api/oauth/kakao", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("토큰이다 이것들아", response.data.data.accessToken);
        if (response.data && response.data.data.accessToken) {
          const token = response.data.data.accessToken;
          console.log("get token", token);

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
      .post("https://moyeota.shop/api/oauth/google", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("토큰이다 이것들아", response.data.data.accessToken);

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
      .post("https://moyeota.shop/api/oauth/naver", {
        authorizationCode: code,
      })
      .then((response) => {
        console.log("토큰이다 이것들아", response.data.data.accessToken);
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
    const requestCode = data.substring(condition + exp.length).split("&")[0];
    requestToken(requestCode, navigation, from);
  }
}

export default OAuth2RedirectHandler;

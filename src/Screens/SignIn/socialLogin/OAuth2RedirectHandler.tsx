import { NavigationProp } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import useAuthStore from "./authStore";

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
  try {
    let response;
    if (from === "Kakao") {
      response = await axios.post("http://moyeota.shop/api/users/kakao", {
        authorizationCode: code,
      });
    } else if (from === "Google") {
      response = await axios.post("http://moyeota.shop/api/users/google", {
        authorizationCode: code,
      });
    } else if (from === "Naver") {
      response = await axios.post("http://moyeota.shop/api/users/naver", {
        authorizationCode: code,
      });
    }

    if (response && response.data && response.data.token) {
      const token = response.data.token;
      useAuthStore.getState().setAuthToken(token);
    }

    navigation.navigate("Guide" as never);
  } catch (error) {
    console.error("Error requesting token:", error);
  }
}

function OAuth2RedirectHandler({
  data,
  navigation,
  from,
}: OAuth2RedirectHandlerProps) {
  const exp = "code=";
  const condition = data.indexOf(exp);

  useEffect(() => {
    if (condition !== -1) {
      const requestCode = data.substring(condition + exp.length).split("&")[0];
      requestToken(requestCode, navigation, from);
    }
  }, []);
}

export default OAuth2RedirectHandler;

import axios from "axios";
import React from "react";
import { Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/core";
import { useNavigation } from "expo-router";

interface OAuth2RedirectHandlerProps {
  data: string;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}

async function requestToken(
  code: string,
  navigation: NavigationProp<ReactNavigation.RootParamList>
) {
  /*
  서버 오픈 후에 사용할 코드
  axios
    .post("http://moyeota.shop:8080/api/users/kakao", {
      authorizationCode: code,
    })
    .catch(function (e) {
      console.log(e);
    });*/
  navigation.navigate("SignIn" as never);
}

function OAuth2RedirectHandler({
  data,
  navigation,
}: OAuth2RedirectHandlerProps) {
  // const exp = "code=";
  // const condition = data.indexOf(exp);

  // if (condition !== -1) {
  //   const requestCode = data.substring(condition + exp.length);
  //   console.log("request");
  //   requestToken(requestCode, navigation);
  //   console.log("r", requestCode);
  // }

  const code = new URL(window.location.href).searchParams.get("code");
  console.log("code", code);
}

export default OAuth2RedirectHandler;

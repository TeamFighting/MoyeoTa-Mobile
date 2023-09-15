import { NavigationProp } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";

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
  const exp = "code=";
  const condition = data.indexOf(exp);

  if (condition !== -1) {
    console.log("condition", condition);
    const requestCode = data.substring(condition + exp.length).split("&")[0];
    requestToken(requestCode, navigation);
  }
}

export default OAuth2RedirectHandler;

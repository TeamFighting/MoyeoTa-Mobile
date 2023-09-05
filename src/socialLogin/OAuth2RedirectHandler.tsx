import axios from "axios";
import React from "react";
import { Text, View } from "react-native";

const requestToken = async (code: string) => {
  var AccessToken = "none";
  axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      grant_type: "authorization_code",
      client_id: "25b39eb533332c2b9c961afdbc365d8c",
      [AccessToken]: code,
      redirect_uri: "http://localhost:19006/oauth/kakao",
    },
  })
    .then((res) => {
      AccessToken = res.data.access_token;
      console.log("AccessToken", AccessToken);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

function OAuth2RedirectHandler(target: string) {
  const exp = "code=";
  const condition = target.indexOf(exp);
  console.log("condition", condition);
  if (condition !== -1) {
    console.log("this is oauthredirecthandler");

    const requestCode = target.substring(condition + exp.length);
    console.log("requestCode", requestCode);
    requestToken(requestCode);
  }

  return (
    <View>
      <Text>로딩중..</Text>
    </View>
  );
}

export default OAuth2RedirectHandler;

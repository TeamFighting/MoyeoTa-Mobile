import React from "react";
import { Pressable, Text, View } from "react-native";
import WebView from "react-native-webview";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const client_id = "3b7fe612c8054aa522c8728a78c2eb28";
const REST_API_KEY = "25b39eb533332c2b9c961afdbc365d8c";
const REDIRECT_URI = "https://moyeota-webview.netlify.app/";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

function Kakao({ route }: any) {
  const navigation = useNavigation();
  console.log("rest api key", REST_API_KEY);
  console.log("redirect uri", REDIRECT_URI);
  return (
    <View style={{ flex: 1, marginTop: 24, backgroundColor: "#fff" }}>
      <Text>{route.params.id}</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={{ paddingTop: 50 }}>뒤로</Text>
      </Pressable>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
          `,
          // uri: `http://localhost:19006/oauth/kakao?code=BEXY8LNguddpwiXe8BARKG0ajmza_w89EBsfkGmD7KKEO--3mMKF397E5-5hW7BnIVMdggo9c-sAAAGKZo9Kpg`,
        }}
        originWhitelist={["*"]}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          console.log("e", event);
          const data = event.nativeEvent["url"];
          OAuth2RedirectHandler({ data, navigation });
        }}
        setSupportMultipleWindows={false}
      />
    </View>
  );
}
export default Kakao;

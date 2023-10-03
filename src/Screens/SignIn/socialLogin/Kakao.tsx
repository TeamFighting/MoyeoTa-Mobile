import React from "react";
import { Pressable, Text, View } from "react-native";
import WebView from "react-native-webview";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

function Kakao() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, marginTop: 24, backgroundColor: "#fff" }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.EXPO_PUBLIC_REDIRECT_URI}
          `,
        }}
        originWhitelist={["*"]}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent["url"];
          const from = "Kakao";
          OAuth2RedirectHandler({ data, navigation, from });
        }}
        setSupportMultipleWindows={false}
      />
    </View>
  );
}
export default Kakao;

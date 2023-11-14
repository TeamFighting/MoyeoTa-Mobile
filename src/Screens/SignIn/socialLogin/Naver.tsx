import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

function Naver() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginTop: 24, backgroundColor: "#fff" }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.EXPO_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.EXPO_PUBLIC_REDIRECT_URI}&state=nid/me`,
        }}
        originWhitelist={["*"]}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent["url"];
          const from = "Naver";
          OAuth2RedirectHandler({ data, navigation, from });
        }}
        setSupportMultipleWindows={false}
      />
    </View>
  );
}

export default Naver;

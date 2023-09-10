import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";

function Naver() {
  const navigation = useNavigation();
  const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
  const naveridlogin = new naver_id_login('${process.env.EXPO_PUBLIC_NAVER_CLIENT_ID}', '${process.env.EXPO_PUBLIC_NAVER_REDIRECT_URI}'}')
  return (
    <View style={{ flex: 1, marginTop: 24, backgroundColor: "#fff" }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.EXPO_PUBLIC_KAKAO_REDIRECT_URI}
            `,
        }}
        originWhitelist={["*"]}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent["url"];
          OAuth2RedirectHandler({ data, navigation });
        }}
        setSupportMultipleWindows={false}
      />
    </View>
  );
}

export default Naver;

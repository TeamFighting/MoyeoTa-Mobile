import WebView from "react-native-webview";
import OAuth2RedirectHandler from "./OAuth2RedirectHandler";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Google() {
  const navigation = useNavigation();
  //Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36

  const customUserAgent = "customUserAgent";
  return (
    <View style={{ flex: 1, marginTop: 24, backgroundColor: "#fff" }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.EXPO_PUBLIC_REDIRECT_URI}&response_type=code&scope=email%20profile`,
        }}
        userAgent={customUserAgent}
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

export default Google;

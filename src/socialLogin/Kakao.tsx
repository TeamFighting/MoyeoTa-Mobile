import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import axios from "axios";
const REST_API_KEY =
  "zfnfLTD4xRSl1J7by2p_5ITHFG6Y1_V00QwsPc_VCClcouKJpnJIibOiCOHxmrYhp0wszQorDKgAAAGKPsF-SQ";
const REDIRECT_URI =
  "https://kauth.kakao.com/oauth/authorize?client_id=3b7fe612c8054aa522c8728a78c2eb28&redirect_uri=http://localhost:8080&response_type=code";

const getCode = (target: string) => {
  const exp = "code=";
  const condition = target.indexOf(exp);
  if (condition !== -1) {
    const requestCode = target.substring(condition + exp.length);
    console.log(requestCode);
    // requestToken(requestCode);
  }
};
// const requestToken = async (code: string) => {
//   const requestTokenUrl = "https://kauth.kakao.com/oauth/token";

//   //   const options = qs.stringify({
//   //     grant_type: "authorization_code",
//   //     client_id: REST_API_KEY,
//   //     redirect_uri: REDIRECT_URI,
//   //     code,
//   //   });

//   try {
//     const tokenResponse = await axios.post(requestTokenUrl, options);
//     const ACCESS_TOKEN = tokenResponse.data.access_token;

//     const body = {
//       ACCESS_TOKEN,
//     };
//     const response = await axios.post(REDIRECT_URI, body);
//     const value = response.data;
//     // const result = await storeUser(value);
//     // if (result === "stored") {
//     //   const user = await getData("user");
//     //   dispatch(read_S(user));
//     //   await navigation.navigate("Main");
//     // }
//   } catch (e) {
//     console.log(e);
//   }
// };
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

function Kakao() {
  return (
    <View>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </View>
  );
}

export default Kakao;

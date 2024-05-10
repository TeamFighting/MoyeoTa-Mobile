import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import WebView from "react-native-webview";

const date = new Date("2024-04-29T11:00:00.911Z").toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
// console.log(date, nowDate);
function Reimbursement() {
  const [isTrackStart, setIsTrackStart] = useState(false);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    userId: -1,
  });
  const ws = new WebSocket("wss://moyeota.shop/tracking");
  // useEffect(() => {
  //   const stringdata = JSON.stringify(location);
  //   console.log("stringdata", stringdata);
  //   ws.send(stringdata);
  // }, [location]);
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (e) => {
      console.log("onmessage", e.data);
    };
    ws.onerror = (e) => {
      console.log("error", e);
    };
    ws.onclose = (e) => {
      console.log("closed", e);
    };
    return () => {
      ws.close();
    };
  }, []);
  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Insufficient permissions!");
          return;
        }
      }
    };

    // if (isTrackStart) {
    // console.log("같다");
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Lowest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (location) => {
        console.log(location.coords.latitude, location.coords.longitude);
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          userId: 1, // 유저 아이디로 수정해야 함
        });
        const stringdata = JSON.stringify(location.coords);
        ws.send(stringdata);
      }
    );
    // }
  }, []);
  const WebViewRef = React.useRef<WebView | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <WebView
          ref={WebViewRef}
          source={{
            uri: `https://moyeota-webview.netlify.app/reimbursement/119/35`,
          }}
          style={{ overflow: "scroll", height: "100%", width: "100%" }}
          onContentProcessDidTerminate={() => {
            WebViewRef.current?.reload();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },

  board: {
    flex: 1,
  },
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    width: "83%",
    height: "44%",
    backgroundColor: "white",
    zIndex: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    gap: 20,
  },
  startText: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  selectedText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default Reimbursement;

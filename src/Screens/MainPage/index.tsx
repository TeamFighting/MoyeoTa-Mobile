import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import CreatePotModal from "../CreatePotPage/CreatePotModal";
import { useModalVisibleStore } from "../../libs/states/setModalVisible";
import { useSelectedTimeStore } from "../../libs/states/selectedTime";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../libs/states/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function MainPage() {
  const { modalVisible, setModalVisible } = useModalVisibleStore();
  const WebViewRef = React.useRef<WebView | null>(null);
  const { selectedTime } = useSelectedTimeStore();
  useEffect(() => {
    const timestamp = selectedTime;
    if (timestamp) {
      const timestampJson = JSON.stringify({
        selectedTime: timestamp.toISOString(),
      });
      if (WebViewRef.current) {
        WebViewRef.current.postMessage(timestampJson);
        console.log("sent", timestamp.toISOString());
      }
    }
  }, [selectedTime]);

  const onMessage = (event: any) => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <WebView
          ref={WebViewRef}
          source={{
            uri: `https://moyeota-webview.netlify.app/mainpage`,
          }}
          onMessage={onMessage}
        />
        {modalVisible && <CreatePotModal />}
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

export default MainPage;

import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import CreatePotModal from "../CreatePot/CreatePotModal";
import { useModalVisibleStore } from "../../../zustand/setModalVisible";
import { useSelectedTimeStore } from "../../../zustand/selectedTime";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTab from "../BottomTab/BottomTab";

function MainPage() {
  const navigation = useNavigation();
  const { modalVisible, setModalVisible } = useModalVisibleStore();
  const WebViewRef = React.useRef<WebView | null>(null);
  const selectedTimeStore = useSelectedTimeStore();

  useEffect(() => {
    const timestamp = selectedTimeStore.selectedTime;
    if (timestamp) {
      const timestampJson = JSON.stringify({
        selectedTime: timestamp.toISOString(),
      });
      if (WebViewRef.current) {
        WebViewRef.current.postMessage(timestampJson);
        console.log("timestamp", timestamp.toISOString());
      }
    }
  }, [selectedTimeStore.selectedTime]);

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

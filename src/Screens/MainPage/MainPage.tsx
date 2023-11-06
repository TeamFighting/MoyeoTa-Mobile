import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import CreatePotModal from "../CreatePot/CreatePotModal";
import { useModalVisibleStore } from "../../../zustand/setModalVisible";

function MainPage() {
  const navigation = useNavigation();

  const { modalVisible, setModalVisible } = useModalVisibleStore();
  const WebViewRef = React.useRef<any>(null);

  const onMessage = (event: any) => {
    // 메시지를 받으면 모달 오픈
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>뒤로</Text>
      </Pressable>
      <StatusBar />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
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

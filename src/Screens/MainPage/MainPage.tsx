import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";

function MainPage() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const onMessage = (event: { nativeEvent: { data: any } }) => {
    const data = event.nativeEvent.data;
    console.log(data);
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
          source={{
            uri: `https://moyeota-webview.netlify.app/mainpage`,
          }}
          onMessage={onMessage}
        />
        {modalVisible && (
          <View style={styles.modalWrapper}>
            <View style={styles.modal}>
              <Text>게시판</Text>
            </View>
          </View>
        )}
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
    // top: "50%",
    // left: "50%",
    width: 300,
    height: 300,
    backgroundColor: "white",
    zIndex: 11,
  },
});

export default MainPage;

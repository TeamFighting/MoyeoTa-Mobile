import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";

function MainPage() {
  const navigation = useNavigation();
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
          onMessage={(event) => {
            console.log(event.nativeEvent.data);
          }}
        />
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
});

export default MainPage;

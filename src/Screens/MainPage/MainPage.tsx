import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

function MainPage() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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

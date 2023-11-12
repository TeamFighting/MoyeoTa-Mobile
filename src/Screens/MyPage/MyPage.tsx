import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MyPage() {
  return (
    <SafeAreaView style={Styles.container}>
      <View></View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 84,
    width: "100%",
    backgroundColor: "black",
  },
});
export default MyPage;

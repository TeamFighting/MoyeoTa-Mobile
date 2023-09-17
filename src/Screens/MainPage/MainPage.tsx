import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

function MainPage() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <StatusBar style="auto" />
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>뒤로</Text>
      </Pressable>
      <StatusBar />
    </View>
  );
}

export default MainPage;

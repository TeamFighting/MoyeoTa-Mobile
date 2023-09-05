import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeModel: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.description}> {item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  },
  image: {
    width: 246.333,
    height: 241.905,
  },
  title: {
    fontSize: 26,
    fontFamily: "PretendardBold",
  },
  description: {
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#7E7E7E",
  },
});

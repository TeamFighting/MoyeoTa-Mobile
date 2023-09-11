import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

import React from "react";

export default function OnboardingItem({ item }: any) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
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
    flex: 0.33,
    marginTop: 50,
    width: 293,
    height: 168,
    justifyContent: "center",
  },
  title: {
    marginTop: 37,
    fontSize: 26,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  description: {
    marginTop: 13,
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#7E7E7E",
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});

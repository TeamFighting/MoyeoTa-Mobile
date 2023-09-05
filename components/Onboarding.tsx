import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import React from "react";
import slides from "../slides";
import OnboardingItem from "../components/OnboardingItem";
export default function Onboarding() {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItem: "center",
  },
});

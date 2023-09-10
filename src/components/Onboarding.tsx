import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import slides from "../../slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator data={slides} scrollX={scrollX} />
        <View style={styles.buttonBottom}>
          <View style={styles.button}>
            <Pressable onPress={() => navigation.navigate("SignIn" as never)}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "PretendardBold",
                }}
              >
                시작하기
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontFamily: "Pretendard",
              textDecorationLine: "underline",
              color: "#9A9A9A",
              textAlign: "center",
              bottom: 73,
            }}
          >
            이미 계정이 있으신가요?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#1EDD81",
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    bottom: 117,
  },
  buttonBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
});

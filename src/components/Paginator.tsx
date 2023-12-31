import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

interface PaginatorProps {
  data: any;
  scrollX: any;
}

export default function Paginator({ data, scrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 18, 8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 7,
    borderRadius: 9,
    backgroundColor: "#000",
    marginHorizontal: 6,
    marginTop: -124,
    left: 143,
  },
});

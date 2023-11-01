import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import SloganImage from "../../assets/svg/Slogan.svg";

export default function Slogan() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 3 }}>
        <Text style={styles.title}>같이 택시 탈사람? 모두 모여타!</Text>
        <Text style={styles.description}>
          모여타는 안전하고 똑똑한 {"\n"}택시팟 매칭 서비스를 제공합니다
        </Text>
      </View>
      <SloganImage style={[styles.image, { width: width }]} />
      <View style={styles.buttonBottom}>
        <Pressable onPress={() => navigation.navigate("Onboarding" as never)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>다음</Text>
          </View>
        </Pressable>
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
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
  title: {
    marginTop: 140,
    fontSize: 26,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 90,
  },
  description: {
    marginTop: 13,
    fontSize: 16,
    fontFamily: "Pretendard",
    color: "#7E7E7E",
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 80,
  },
  image: {
    position: "absolute",
    transform: [{ translateY: 45 }],
    width: windowWidth,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PretendardBold",
  },
});

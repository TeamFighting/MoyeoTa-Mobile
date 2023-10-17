import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import Ximage from "../../../../assets/svg/x_image.svg";
import Image from "../../../../assets/svg/Slogan.svg";
import { colors } from "../../../styles/color";

function EmailSuccess({ navigation }: { navigation: any }) {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 52,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow style={{ marginLeft: 14 }} />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Ximage style={{ marginLeft: 299 }} />
        </Pressable>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>학교 인증이</Text>
        <Text style={styles.intro}>완료되었어요!</Text>
        <Text style={styles.description}>
          이제 안심하고 서비스를 이용할 수 있어요
        </Text>
      </View>

      <View style={styles.signInMiddle}>
        <Image style={styles.image} />
        <Text style={styles.guide}>
          ⦁ 모여타는 철저한 학교 인증과 안전한 익명 매칭 서비스를 제공하기 위해,
          가입 시 본인 인증 수단을 통해 본인 여부를 확인합니다.
        </Text>
      </View>

      <View style={styles.signInBottom}>
        <View style={styles.button}>
          <Pressable onPress={() => navigation.navigate("Guide" as never)}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "PretendardBold",
                fontWeight: "700",
              }}
            >
              확인
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  introContainer: {
    height: windowHeight * 0.4,
    width: "100%",
    paddingTop: windowHeight * 0.05,
    paddingLeft: "7%",
  },
  intro: {
    fontSize: 22,
    fontFamily: "PretendardBold",
    flexShrink: 0,
    fontWeight: "700",
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Pretendard",
    color: "#9A9A9A",
  },
  signInMiddle: {
    // marginTop: -250,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 15,
  },
  image: {
    marginTop: -100,
    marginBottom: 70,
  },
  guide: {
    fontFamily: "Pretendard",
    color: "#9A9A9A",
    paddingHorizontal: 25,
    fontSize: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.green,
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },
  signInBottom: {
    alignItems: "center",
  },
});

export default EmailSuccess;

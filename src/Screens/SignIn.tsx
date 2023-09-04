import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Kakaotalk from "../../assets/svg/kakaotalk.svg";
import Naver from "../../assets/svg/naver.svg";
import Google from "../../assets/svg/google.svg";
import LeftArrow from "../../assets/svg/leftArrow.svg";
import { colors } from "../styles/color";

function SignIn() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ paddingTop: 52, paddingLeft: 14 }}>
        <LeftArrow />
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>반가워요!</Text>
        <Text style={styles.intro}>회원 가입을 해주세요</Text>
        <Text style={[styles.intro, styles.announcement]}>
          휴대폰 번호는 안전하게 보관됩니다.
        </Text>
      </View>
      <View style={styles.icons}>
        <View style={styles.signInTop}>
          <Kakaotalk style={{ width: 40, height: 40 }} />
          <Naver />
          <Google />
        </View>
        <View style={styles.signInMiddle}>
          <Text
            style={{ color: "#9a9a9a", fontSize: 14, fontFamily: "Pretendard" }}
          >
            SNS 계정으로 시작하기
          </Text>
        </View>

        <View style={styles.signInBottom}>
          <View style={styles.button}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "PretendardBold",
              }}
            >
              회원가입
            </Text>
          </View>
          <View
            style={[
              styles.button,
              { backgroundColor: "#f1f1f1", marginBottom: 22 },
            ]}
          >
            <Text
              style={{
                color: "#5d5d5d",
                fontSize: 18,
                fontFamily: "PretendardBold",
              }}
            >
              닫기
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Pretendard",
              textDecorationLine: "underline",
              color: "#9A9A9A",
            }}
          >
            이미 계정이 있으신가요?
          </Text>
        </View>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  icons: {
    height: windowHeight * 0.4,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  introContainer: {
    height: windowHeight * 0.4,
    width: "100%",
    paddingTop: windowHeight * 0.05,
    paddingLeft: "7%",
  },
  intro: {
    fontSize: 22,
    fontFamily: "PretendardBold",
  },
  announcement: {
    paddingTop: 15,
    fontSize: 16,
    color: "#9A9A9A",
    fontFamily: "PretendardSemiBold",
  },
  signInTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 27,
    paddingBottom: 18,
  },
  signInMiddle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 64,
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

export default SignIn;

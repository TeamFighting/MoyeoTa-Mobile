import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";
import Kakaotalk from "../../../assets/svg/KakaotalkIcon.svg";
import Naver from "../../../assets/svg/NaverIcon.svg";
import Google from "../../../assets/svg/GoogleIcon.svg";
import { colors } from "../../libs/styles/color";

export type RootStackParamList = {
  LoginScreen: undefined;
  ChatRoomScreen: undefined;
  ChatScreen: { room: string };
};

function SignIn({ route, navigation }: { route: any; navigation: any }) {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <View style={{ paddingTop: 52, paddingLeft: 14 }}>
        <Pressable onPress={() => navigation.goBack()}></Pressable>
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
          <Pressable
            onPress={() => {
              navigation.navigate("Kakao", { id: "Kakao" });
            }}
          >
            <Kakaotalk style={{ width: 40, height: 40 }} />
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("Naver", { id: "Naver" });
            }}
          >
            <Naver />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Google", { id: "Google" });
            }}
          >
            <Google />
          </Pressable>
        </View>
        <View style={styles.signInMiddle}>
          <Text
            style={{ color: "#9a9a9a", fontSize: 14, fontFamily: "Pretendard" }}
          >
            SNS 계정으로 시작하기
          </Text>
        </View>

        <View style={styles.signInBottom}>
          <Pressable
            onPress={() => {
              navigation.navigate("Main", { id: "Mainpage" });
            }}
          >
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
          </Pressable>
          <View
            style={[
              styles.button,
              {
                backgroundColor: "#f1f1f1",
                marginBottom: 22,
                borderRadius: 12,
              },
            ]}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: "#5d5d5d",
                  fontSize: 18,
                  fontFamily: "PretendardBold",
                }}
              >
                닫기
              </Text>
            </Pressable>
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

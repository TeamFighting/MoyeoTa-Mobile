import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import Ximage from "../../../../assets/svg/x_image.svg";
import { colors } from "../../../styles/color";

function SchoolLoginSelect({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
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
        <Pressable
          onPress={() => {
            navigation.navigate("SignIn", {
              id: "SignIn",
            });
          }}
        >
          <Ximage style={{ marginLeft: 299 }} />
        </Pressable>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>인증 방식을 선택해주세요</Text>
        <Text style={styles.introdescript}>
          신원을 확인하기 위한 용도로만 쓰일거에요
        </Text>
      </View>
      <View style={styles.signInMiddle}>
        <Pressable
          onPress={() => {
            navigation.navigate("InputLogin", {
              id: "InputLogin",
            });
          }}
        >
          <View style={styles.box}>
            <Text style={styles.title}>학교 웹 메일 인증</Text>

            <Text style={styles.description}>
              입학년도와 학교를 입력 후 학교 웹 메일 인증을 통해 인증 받을 수
              있어요
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("DateModal", {
              id: "DateModal",
            });
          }}
        >
          <View style={styles.box}>
            <Text style={styles.title}>재학생 인증</Text>

            <Text style={styles.description}>
              대학생들의 신원을 확인하기 위한 용도로 재학 증명 자료를 통해 인증
              받을 수 있어요
            </Text>
          </View>
        </Pressable>
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
  introdescript: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#9A9A9A",
  },
  signInTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 27,
    paddingBottom: 18,
  },
  signInMiddle: {
    marginTop: -160,
    justifyContent: "center",
    alignItems: "center",
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
  box: {
    backgroundColor: "#F5F6F8",
    width: 335,
    height: 117,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    marginTop: -20,
    fontSize: 16,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    paddingHorizontal: 28,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#9A9A9A",
    paddingHorizontal: 28,
  },
});

export default SchoolLoginSelect;

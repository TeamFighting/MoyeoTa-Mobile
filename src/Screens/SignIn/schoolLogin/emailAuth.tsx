import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import { colors } from "../../../styles/color";

function EmailAuth({ route, navigation }: { route: any; navigation: any }) {
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
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>학교 웹 메일 주소로</Text>
        <Text style={styles.intro}>인증번호가 전송 되었어요</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.signInMiddle}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="인증번호를 입력해주세요"
          />
        </View>
        <Text style={styles.description}>
          어떠한 경우에도 타인에게 공유하지 마세요!
        </Text>
      </View>
      <View style={styles.signInBottom}>
        <Text
          style={{
            fontFamily: "Pretendard",
            textDecorationLine: "underline",
            color: "#9A9A9A",
            fontSize: 14,
            marginTop: 170,
          }}
        >
          인증번호 다시받기
        </Text>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              navigation.navigate("EmailAuth", {
                id: "EmailAuth",
              });
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "PretendardBold",
                fontWeight: "700",
              }}
            >
              다음
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
  input: {
    width: 336,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    // marginTop: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#9A9A9A",
    padding: 8,
    fontFamily: "Pretendard",
    fontSize: 22,
    marginBottom: 8,
  },
  middle: {
    marginTop: -195,
  },
  signInTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 27,
    paddingBottom: 18,
  },
  signInMiddle: {
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.green,
    width: 375,
    height: 48,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signInBottom: {
    alignItems: "center",
  },

  description: {
    fontSize: 12,
    fontFamily: "PretendardBold",
    fontWeight: "500",
    color: "#9A9A9A",
    paddingLeft: 20,
  },
});

export default EmailAuth;

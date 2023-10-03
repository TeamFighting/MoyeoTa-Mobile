import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import QuestionMark from "../../../../assets/svg/questionMark.svg";
import { colors } from "../../../styles/color";

function InputLogin({ route, navigation }: { route: any; navigation: any }) {
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [univName, setUnivName] = useState("");

  const handleNextButtonPress = async () => {
    try {
      const headers = {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await sendVerificationCodeToEmail(email, headers);

      if (response.code === 0 && response.univ_check) {
        // 인증 코드 요청이 성공하고 학교 인증이 완료된 경우 다음 화면
        navigation.navigate("EmailAuth", {
          id: "EmailAuth",
          email: response.email,
          univName: response.univName,
          key: response.key,
        });
      } else {
        alert("인증 코드 요청 실패");
        console.log(response.code);
      }
    } catch (error) {
      console.error("인증 코드 요청 중 오류:", error);
      alert("인증 코드 요청 중 오류 발생");
    }
  };

  const sendVerificationCodeToEmail = async (email: string, headers: any) => {
    try {
      const response = await fetch(
        "http://moyeota.shop:80/api/users/school-email",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  };

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
        <Text style={styles.intro}>학교 선택</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>입학년도</Text>
        <View style={styles.signInMiddle}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setYear(text)}
            value={year}
          />
        </View>
        <Text style={styles.description}>학교</Text>
        <View style={styles.signInMiddle}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUnivName(text)}
            value={univName}
          />
          <Pressable onPress={() => navigation.navigate("SchoolList" as never)}>
            <QuestionMark style={styles.question} />
          </Pressable>
        </View>
        <Text style={styles.description}>웹 메일 주소</Text>
        <View style={styles.signInMiddle}>
          <TextInput
            style={styles.input}
            keyboardType={"email-address"}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
      </View>
      <View style={[styles.signInBottom, styles.button]}>
        <Pressable onPress={handleNextButtonPress}>
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
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: "#F5F6F8",
    padding: 14,
    fontFamily: "Pretendard",
    fontSize: 16,
    marginBottom: 16,
  },
  middle: {
    marginTop: -195,
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
    fontSize: 14,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#9A9A9A",
    paddingLeft: 36,
  },
  question: {
    position: "absolute",
    left: 130,
    bottom: 30,
    width: 24,
    height: 24,
  },
});

export default InputLogin;

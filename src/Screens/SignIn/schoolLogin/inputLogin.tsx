import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/LeftArrow.svg";
import QuestionMark from "../../../../assets/svg/QuestionMark.svg";
import { colors } from "../../../styles/color";
import { useAuthStore } from "../../../../zustand/authStore";

function InputLogin({ route, navigation }: { route: any; navigation: any }) {
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [univName, setUnivName] = useState("");

  const selectedSchool = route.params.selectedSchool || "";

  const authToken = useAuthStore((state) => state.token);
  console.log("authToken", authToken);

  const handleNextButtonPress = async () => {
    try {
      if (!email) {
        alert("이메일을 입력해주세요.");
        return;
      }
      if (!year) {
        alert("입학년도를 입력해주세요.");
        return;
      }
      if (!selectedSchool) {
        alert("학교 이름을 입력해주세요.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      };
      const response = await sendVerificationCodeToEmail(email, headers);

      if (response.status === "ERROR") {
        alert(response.message);
      } else {
        navigation.navigate("EmailAuth", {
          id: "EmailAuth",
          email: email,
          univName: selectedSchool,
        });
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
          body: JSON.stringify({
            email: email,
            univName: selectedSchool,
          }),
        }
      );

      const data = await response.json();
      console.log("responseData", data);
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
            value={selectedSchool}
            editable={false}
          />
          <Pressable onPress={() => navigation.navigate("SchoolList")}>
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
    marginTop: -204,
  },
  signInMiddle: {
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.green,
    width: windowWidth,
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

import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import { colors } from "../../../styles/color";

function EmailAuth({ route, navigation }: { route: any; navigation: any }) {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [univName, setUnivName] = useState<string>("");
  const [univCheck, setUnivCheck] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");

  const handleVerification = async () => {
    try {
      const response = await fetch(
        "http://moyeota.shop:80/api/users/school-email-check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verificationCode }),
        }
      );

      const data = await response.json();

      if (data.code === 0 && data.univ_check) {
        // 인증 성공
        setEmail(data.email);
        setUnivName(data.univName);
        setKey(data.key);
        setUnivCheck(true);
        navigation.navigate("EmailSuccess", {
          id: "EmailSuccess",
          email: data.email,
          univName: data.univName,
          key: data.key,
        });
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      console.error("인증 코드 확인 중 오류:", error);
      alert("인증 코드 확인 중 오류 발생");
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
        <Text style={styles.intro}>학교 웹 메일 주소로</Text>
        <Text style={styles.intro}>인증번호가 전송 되었어요</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.signInMiddle}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="인증번호를 입력해주세요"
            onChangeText={(text) => setVerificationCode(text)}
            value={verificationCode}
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
          <Pressable onPress={handleVerification} disabled={!verificationCode}>
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

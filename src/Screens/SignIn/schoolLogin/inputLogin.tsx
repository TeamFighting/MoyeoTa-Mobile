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

function InputLogin({ route, navigation }: { route: any; navigation: any }) {
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [univName, setUnivName] = useState("");

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
        {/* <WarningText>{WarningText}</WarningText> */}
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
    fontSize: 14,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#9A9A9A",
    paddingLeft: 36,
  },
});

export default InputLogin;

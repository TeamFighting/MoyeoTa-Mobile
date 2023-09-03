import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
function SignIn() {

  return (
    <View style={{}}>
      <View style={styles.container}>
        <Text style={styles.intro}>반가워요!</Text>
        <Text style={styles.intro}>회원 가입을 해주세요</Text>
        <Text style={[styles.intro, styles.announcement]}>
          휴대폰 번호는 안전하게 보관됩니다.
        </Text>
      </View>
      <View style={styles.icons}>
        <Text>로그인</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: { flex: 5 },

  container: {
    flex: 1,
    width: "100%",
    paddingTop: "25%",
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
});

export default SignIn;

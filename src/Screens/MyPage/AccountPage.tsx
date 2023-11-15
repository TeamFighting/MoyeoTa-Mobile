import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LeftArrow from "../../../assets/svg/LeftArrow.svg";
import Ximage from "../../../assets/svg/X_image.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMyInfoStore } from "../../../zustand/myInfoStore";
import { useNavigation } from "@react-navigation/native";

function AccountPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow style={{ marginLeft: 14, marginBottom: 20 }} />
        </Pressable>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={Styles.headerText}>계정 관리</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Ximage style={{ marginRight: 14, marginBottom: 20 }} />
        </Pressable>
      </View>
      <View style={{ width: "100%", backgroundColor: "#eeeeee", height: 9 }} />
      <View style={Styles.UpdateWrapper}>
        <Text style={Styles.UpdateTitle}>개인정보 수정</Text>
        <View style={Styles.infoWrapper}>
          <Text style={Styles.infoTitle}>사용자명</Text>
          <Text style={Styles.info}>오세빈</Text>
          <Text style={Styles.infoTitle}>전화번호</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={Styles.input}
              placeholder="010-3937-3291"
              placeholderTextColor={Styles.placeholder.color}
              clearButtonMode="always"
            />
          </View>
          <Text style={Styles.infoTitle}>이메일</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              style={Styles.input}
              placeholder="moyeondoo@gmail.com"
              placeholderTextColor={Styles.placeholder.color}
              clearButtonMode="always"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#eeeeee",
          height: 6,
          marginTop: 32,
        }}
      />
      <View style={Styles.ManageWrapper}>
        <Text style={Styles.UpdateTitle}>계정 관리</Text>
        <View style={Styles.ButtonWrapper}>
          <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
            <Text style={Styles.buttonText}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
            <Text style={Styles.buttonText}>회원탈퇴</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
            <Text style={Styles.buttonText}>수정하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 84,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 21,
    textAlign: "center",
  },
  UpdateWrapper: {
    display: "flex",
    paddingTop: 32,
  },
  UpdateTitle: {
    color: "#000",
    fontFamily: "PretendardBold",
    fontSize: 18,
    paddingLeft: 25,
  },
  infoWrapper: { paddingTop: 0 },
  infoTitle: {
    color: "#7E7E7E",
    fontFamily: "PretendardBold",
    fontSize: 14,
    fontStyle: "normal",
    paddingBottom: 8,
    paddingTop: 32,
    paddingLeft: 36,
  },
  info: {
    color: "#343434",
    fontFamily: "PretendardBold",
    fontSize: 18,
    paddingLeft: 36,
  },
  input: {
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "#F5F6F8",
    padding: 16,
    fontFamily: "Pretendard",
    fontSize: 14,
  },
  placeholder: {
    color: "#343434",
    fontFamily: "PretendardBold",
    fontSize: 16,
    lineHeight: 25.12,
  },
  ManageWrapper: { paddingTop: 32 },
  ButtonWrapper: {
    paddingBottom: 9,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 335,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F5F6F8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    color: "#5D5D5D",
  },
});
export default AccountPage;

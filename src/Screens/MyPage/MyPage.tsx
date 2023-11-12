import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserInfo from "../../../assets/svg/UserInfo.svg";
import CreditCard from "../../../assets/svg/CreditCard.svg";
import Speakerphone from "../../../assets/svg/Speakerphone.svg";
import Star from "../../../assets/svg/Star.svg";
import Bell from "../../../assets/svg/Bell.svg";

function MyPage() {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>내 정보</Text>
      </View>
      <View style={Styles.divider} />
      <View style={Styles.Profile} />
      <View style={Styles.SelectPotWrapper}>
        <View style={Styles.SelectPot}>
          <Text>찜한 팟</Text>
        </View>
      </View>
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <UserInfo />
          <Text style={Styles.ListText}>계정관리</Text>
        </View>
        <View style={Styles.List}>
          <CreditCard />
          <Text style={Styles.ListText}>결제 수단 관리</Text>
        </View>
      </View>
      <View style={Styles.divider} />
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <Star />
          <Text style={Styles.ListText}>즐겨 찾는 장소 설정</Text>
        </View>
        <View style={Styles.List}>
          <Bell />
          <Text style={Styles.ListText}>알림 설정</Text>
        </View>
        <View style={Styles.List}>
          <Speakerphone />
          <Text style={Styles.ListText}>공지사항</Text>
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
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 21,
  },
  divider: {
    height: 5,
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  Profile: {
    height: 123,
    width: "100%",
    backgroundColor: "red",
  },
  SelectPotWrapper: {
    height: 75,
    width: "100%",
    backgroundColor: "blue",
    marginTop: 35,
    marginBottom: 35,
  },
  SelectPot: {
    height: 75,
    width: "89%",
    backgroundColor: "#eeeeee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 21,
  },
  ListWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  ListText: {
    color: "#343434",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    marginLeft: 16,
  },

  List: {
    height: 24,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    marginLeft: 21,
    marginBottom: 35,
  },
});
export default MyPage;

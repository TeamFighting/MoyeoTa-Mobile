import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserInfoIcon from "../../../assets/svg/UserInfoIcon.svg";
import CreditCard from "../../../assets/svg/CreditCardIcon.svg";
import Speakerphone from "../../../assets/svg/SpeakerphoneIcon.svg";
import Star from "../../../assets/svg/StarIcon.svg";
import Bell from "../../../assets/svg/BellIcon.svg";
import Favorite from "../../../assets/svg/FavoriteIcon.svg";
import RightArrow from "../../../assets/svg/RightArrowIcon.svg";
import Pencil from "../../../assets/svg/PencilIcon.svg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMyInfoStore } from "../../libs/states/myInfoStore";
import { useNavigation } from "@react-navigation/native";
import { MyInfoType } from "../../libs/types/types";

function MyPage() {
  useEffect(() => {
    getMyInfo();
  }, []);

  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const { myInfo, setMyInfo } = useMyInfoStore();

  const Token = AsyncStorage.getItem("accessToken");

  async function getMyInfo() {
    try {
      const response = await axios.get("https://moyeota.shop/api/users", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      console.log("HERE", response.data.data);
      // setMyInfo(response.data.data);
    } catch (e) {
      console.log("MyPage", e);
    }
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>내 정보</Text>
      </View>
      <View style={{ width: "100%", backgroundColor: "#eeeeee", height: 9 }} />
      <View style={Styles.Profile}>
        <View style={Styles.ProfileImg}>
          <Image
            style={Styles.ProfileImg}
            source={{
              uri: myInfo.profileImage,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            height: "70%",
            width: "30%",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("UpdateProfile" as never)}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  color: "#343434",
                  fontFamily: "Pretendard",
                  fontSize: 22,
                  fontWeight: "200",
                  fontStyle: "normal",
                }}
              >
                my닉네임
              </Text>
              <Pencil />
            </View>
          </Pressable>
          <View
            style={{
              marginTop: 4,
              gap: 4,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={Styles.Tag}>
              <Text style={Styles.TagText}>
                {myInfo.gender ? "남자" : "여자"}
              </Text>
            </View>
            <View style={Styles.Tag}>
              <Text style={Styles.TagText}>
                {myInfo.age != null ? `${myInfo.age}대` : "나이 미입력"}
              </Text>
            </View>
            <View style={Styles.Tag}>
              <Text style={Styles.TagText}>
                {myInfo.school != null ? "실명인증완료" : "실명 미인증"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.FavoritePotWrapper}>
        <View style={Styles.FavoritePot}>
          <Favorite style={{ width: 24 }} />
          <Text
            style={{
              color: "#343434",
              fontFamily: "Pretendard",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            찜한 팟
          </Text>
        </View>
      </View>
      <View style={Styles.TotalList}>
        <View style={Styles.ListWrapper}>
          <Pressable
            style={{ backgroundColor: "black" }}
            onPress={() => navigation.navigate("Account" as never)}
          >
            <View style={Styles.List}>
              <View style={Styles.Icon}>
                <UserInfoIcon />
              </View>
              <Text style={Styles.ListText}>계정관리</Text>
            </View>
          </Pressable>
          <View style={{ height: 24 }}>
            <RightArrow />
          </View>
        </View>
        <View style={Styles.ListWrapper}>
          <View style={Styles.List}>
            <CreditCard />
            <Text style={Styles.ListText}>결제 수단 관리</Text>
          </View>
          <RightArrow />
        </View>
        <View style={Styles.divider} />
        <View style={Styles.ListWrapper}>
          <View style={Styles.List}>
            <Star />
            <Text style={Styles.ListText}>즐겨 찾는 장소 설정</Text>
          </View>
          <RightArrow />
        </View>
        <View style={Styles.ListWrapper}>
          <View style={Styles.List}>
            <Bell />
            <Text style={Styles.ListText}>알림 설정</Text>
          </View>
          <RightArrow />
        </View>
        <View style={Styles.ListWrapper}>
          <View style={Styles.List}>
            <Speakerphone />

            <Text style={Styles.ListText}>공지사항</Text>
          </View>

          <RightArrow />
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 21,
  },
  divider: {
    height: 6,
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  Profile: {
    height: 123,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 14,
    marginLeft: 28,
  },
  ProfileImg: {
    width: 60,
    height: 60,
    backgroundColor: "#eee",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  Tag: {
    height: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  TagText: { color: "#7E7E7E", fontSize: 10, fontWeight: "600" },
  FavoritePotWrapper: {
    height: 85,
    width: "100%",
    marginTop: 12,
    marginBottom: 36,
  },
  FavoritePot: {
    height: "100%",
    width: "89%",
    backgroundColor: "#eeeeee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 21,
    gap: 6,
  },
  TotalList: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },

  ListText: {
    color: "#343434",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    marginLeft: 16,
  },

  ListWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "89%",
    gap: 16,
  },

  List: {
    height: 24,
    display: "flex",
    flexDirection: "row",
  },

  ContentText: {
    color: "#343434",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
  Icon: {},
});
export default MyPage;

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image } from "react-native";
import { Styles } from "../styles";
import { defaultProfile } from "../../../libs/styles/imgUrl";
import PencilIcon from "../../../../assets/svg/PencilIcon.svg";
import { useMyInfoStore } from "../../../libs/states/myInfoStore";
import { ages } from "../../../libs/util/age";

function UserInfo() {
  const navigation = useNavigation();
  const { myInfo } = useMyInfoStore();
  return (
    <View style={Styles.Profile}>
      <View style={Styles.ProfileImg}>
        <Image
          style={Styles.ProfileImg}
          source={{
            uri:
              myInfo.profileImage != null
                ? myInfo.profileImage
                : defaultProfile,
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
          onPress={() => navigation.navigate("UpdateProfilePage" as never)}
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
              {myInfo.nickname != null || myInfo.nickname != ""
                ? myInfo.nickname
                : myInfo.name}
            </Text>
            <PencilIcon />
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
              {myInfo.age != null ? `${ages(myInfo.age)}대` : "나이 미입력"}
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
  );
}

export default UserInfo;

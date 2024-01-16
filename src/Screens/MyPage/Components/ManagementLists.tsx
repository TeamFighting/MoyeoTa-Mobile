import React from "react";
import { View, Text, Pressable } from "react-native";
import { Styles } from "../styles";
import UserInfoIcon from "../../../../assets/svg/UserInfoIcon.svg";
import CreditCardIcon from "../../../../assets/svg/CreditCardIcon.svg";
import SpeakerphoneIcon from "../../../../assets/svg/SpeakerphoneIcon.svg";
import StarIcon from "../../../../assets/svg/StarIcon.svg";
import BellIcon from "../../../../assets/svg/BellIcon.svg";
import RightArrowIcon from "../../../../assets/svg/RightArrowIcon.svg";
import { useNavigation } from "@react-navigation/native";

function ManagementLists() {
  const navigation = useNavigation();
  return (
    <View style={Styles.TotalList}>
      <View style={Styles.ListWrapper}>
        <Pressable onPress={() => navigation.navigate("Account" as never)}>
          <View style={Styles.List}>
            <View style={Styles.Icon}>
              <UserInfoIcon />
            </View>
            <Text style={Styles.ListText}>계정관리</Text>
          </View>
        </Pressable>
        <View style={{ height: 24 }}>
          <RightArrowIcon />
        </View>
      </View>
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <CreditCardIcon />
          <Text style={Styles.ListText}>결제 수단 관리</Text>
        </View>
        <RightArrowIcon />
      </View>
      <View style={Styles.ThinDivider} />
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <StarIcon />
          <Text style={Styles.ListText}>즐겨 찾는 장소 설정</Text>
        </View>
        <RightArrowIcon />
      </View>
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <BellIcon />
          <Text style={Styles.ListText}>알림 설정</Text>
        </View>
        <RightArrowIcon />
      </View>
      <View style={Styles.ListWrapper}>
        <View style={Styles.List}>
          <SpeakerphoneIcon />

          <Text style={Styles.ListText}>공지사항</Text>
        </View>

        <RightArrowIcon />
      </View>
    </View>
  );
}

export default ManagementLists;

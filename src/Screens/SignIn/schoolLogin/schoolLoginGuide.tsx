import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import LeftArrow from "../../../../assets/svg/LeftArrowIcon.svg";
import Ximage from "../../../../assets/svg/X_imageIcon.svg";
import SchoolImage from "../../../../assets/school_images/schoolImage.png";
import { colors } from "../../../libs/styles/color";

function SchoolLoginGuide({ navigation }: { navigation: any }) {
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
        <Pressable
          onPress={() => {
            navigation.navigate("SignIn", {
              id: "SignIn",
            });
          }}
        >
          <Ximage style={{ marginLeft: 299 }} />
        </Pressable>
      </View>
      <View style={styles.introContainer}>
        <Image
          source={SchoolImage}
          style={{ marginTop: 24, width: 64, height: 66, marginBottom: 16 }}
        />
        <Text style={styles.intro}>학교 인증하고</Text>
        <Text style={styles.intro}>안전하게 이용해요!</Text>
        <Text style={styles.description}>인증 방식을 선택해주세요</Text>
      </View>
      <View style={styles.signInMiddle}>
        <Text
          style={[
            styles.guide,
            {
              paddingRight: 10,
            },
          ]}
        >
          ⦁ 학번, 웹메일 도용 등 올바르지 않은 경로를 통해 인증을 시도할{"\n"}
          경우, 관련 법에 따라 법적 책임이 따를 수 있습니다.
        </Text>
        <Text style={styles.guide}>
          ⦁ 인증 후 사용할 수 있는 매칭 서비스의 게시물 일체를 복사하거나,{"\n"}
          스크린 샷을 통해 외부로 유출해서는 안 됩니다.
        </Text>
      </View>

      <View style={styles.signInBottom}>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              navigation.navigate("SchoolLoginSelect", {
                id: "SchoolLoginSelect",
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
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: "#f1f1f1",
              marginBottom: 22,
              borderRadius: 12,
            },
          ]}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: "#5d5d5d",
                fontSize: 18,
                fontFamily: "PretendardBold",
                fontWeight: "500",
              }}
            >
              없어요
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
  description: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#9A9A9A",
  },
  signInTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 27,
    paddingBottom: 18,
  },
  signInMiddle: {
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  guide: {
    fontFamily: "Pretendard",
    color: "#9A9A9A",
    fontSize: 12,
    marginTop: 16,
  },
  button: {
    backgroundColor: colors.green,
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },
  signInBottom: {
    alignItems: "center",
  },
});

export default SchoolLoginGuide;

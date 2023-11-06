import {
  Text,
  View,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import LeftArrow from "../../assets/svg/leftArrow.svg";
import { useNavigation } from "@react-navigation/native";
import Guide1 from "../../assets/svg/guide1.svg";
import Guide2 from "../../assets/svg/guide2.svg";
import Guide3 from "../../assets/svg/guide3.svg";

export default function Guide() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 52, paddingLeft: 14 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
      </View>
      <Text style={styles.guide}>예약 이용 가이드</Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginTop: 39 }}>
          <View style={styles.box}>
            <Guide1 style={{ marginLeft: -260, marginTop: -10 }} />
            <Text style={styles.title}>출발지/도착지와 예약 일시 선택</Text>
            <Text style={styles.description}>
              <Text
                style={{
                  color: "#606060",
                  fontFamily: "PretendardBold",
                }}
              >
                예약 (편도)
              </Text>
              : 원하는 출발지에서 도착지까지의 상세한 설정을 할 수 있어요.
            </Text>
          </View>
          <View style={styles.box}>
            <Guide2 style={{ marginLeft: -260, marginTop: -10 }} />

            <Text style={styles.title}>나만의 선호 운행 선택</Text>

            <Text style={styles.description}>
              선호 운행 방식을 선택하여 팟을 생성해 보세요. 더 편안한 여정이 될
              수 있을 거에요.
            </Text>
          </View>
          <View style={styles.box}>
            <Guide3 style={{ marginLeft: -260, marginTop: -30 }} />

            <Text style={styles.title}>팟장이 수락하면 매칭 완료!</Text>

            <Text style={styles.description}>
              알림탭에서 예약 현황을 확인할 수 있어요.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <Text
          style={{
            fontFamily: "Pretendard",
            color: "#9A9A9A",
            textAlign: "center",
            paddingHorizontal: 30,
            fontSize: 12,
            marginTop: 50,
          }}
        >
          ⦁ 유의사항 : 서비스 지역은 확장 중에 있으며 출발지 기준으로 바로 바로
          실시간으로 빠른 매칭이 안되는 경우가 있어요
        </Text>
         <Pressable onPress={() => navigation.navigate("SchoolLogin" as never)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>확인</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  guide: {
    marginTop: 78,
    fontSize: 22,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  title: {
    marginTop: -40,
    fontSize: 16,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Pretendard",
    fontWeight: "500",
    color: "#9A9A9A",
    paddingHorizontal: 40,
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#1EDD81",
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  box: {
    backgroundColor: "#F5F6F8",
    width: 335,
    height: 117,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  buttonBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PretendardBold",
  },
});

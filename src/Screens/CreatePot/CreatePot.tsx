import {
  Text,
  View,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import LeftArrow from "../../../assets/svg/LeftArrow.svg";
import RightArrow from "../../../assets/svg/RightArrow.svg";
import Ximage from "../../../assets/svg/X_image.svg";
import { useNavigation } from "@react-navigation/native";

export default function CreatePot() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [name, setName] = React.useState("");

  const onChangeName = (event: React.SetStateAction<string>) => setName(event);
  return (
    <View style={[styles.container, { width }]}>
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
        <Pressable onPress={() => navigation.goBack()}>
          <Ximage style={{ marginLeft: 299 }} />
        </Pressable>
      </View>
      <Text style={styles.subject}>상세 항목을 알려주세요</Text>

      <View style={styles.middle}>
        <TextInput
          style={styles.input}
          placeholder="지역, 목적지가 포함된 제목이면 더 좋아요"
          onChangeText={onChangeName}
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={styles.title}>출발시간</Text>
          <RightArrow style={{ marginLeft: 235 }} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={styles.title}>이동수단 및 인원</Text>
          <RightArrow style={{ marginLeft: 179 }} />
        </View>
      </View>
      <View style={styles.buttonBottom}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>팟 생성 완료</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subject: {
    marginTop: 41,
    fontSize: 22,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    marginLeft: 14,
  },
  title: {
    fontFamily: "PretendardBold",
    fontSize: 18,
    fontWeight: "700",
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 336,
    height: 48,
    flexShrink: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0",
    marginTop: 60,
    fontFamily: "Pretendard",
    fontSize: 16,
  },
  buttonBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1EDD81",
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 306,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PretendardBold",
  },
});

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import LeftArrow from "../../../assets/svg/LeftArrowIcon.svg";
import Ximage from "../../../assets/svg/X_imageIcon.svg";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMyInfoStore } from "../../libs/states/myInfoStore";
import { defaultProfile } from "../../libs/styles/imgUrl";

function UpdateProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const { myInfo } = useMyInfoStore();

  const onChangeName = (inputName: string) => {
    setName(inputName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow style={{ marginLeft: 14, marginBottom: 20 }} />
        </Pressable>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.headerText}>계정 관리</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Ximage style={{ marginRight: 14, marginBottom: 20 }} />
        </Pressable>
      </View>
      <Text style={styles.title}>프로필을 설정해주세요</Text>
      <Text style={styles.description}>
        사진과 닉네임, 성별, 나이대가 공개돼요
        {"\n"}합승할 파티원에게 보여줄 프로필을 설정해보세요
      </Text>
      <View style={styles.middle}>
        <Image
          source={{
            uri: myInfo.profileImage ? myInfo.profileImage : defaultProfile,
          }}
          style={{
            borderRadius: 50,
            marginTop: 26,
            width: 100,
            height: 100,
          }}
        />

        <View
          style={{
            marginTop: 4,
            gap: 8,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={styles.Tag}>
            <Text style={styles.TagText}>
              {myInfo.gender ? "남자" : "여자"}
            </Text>
          </View>
          <View style={styles.Tag}>
            <Text style={styles.TagText}>20대</Text>
          </View>
          <View style={styles.Tag}>
            <Text style={styles.TagText}>실명인증완료</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value="모연두" //닉네임
          clearButtonMode="always"
        />
      </View>
      <View style={styles.buttonBottom}>
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              // navigation.navigate("CreatePot" as never, { id: "CreatePot" });
            }}
          >
            <Text style={styles.buttonText}>저장하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
  title: {
    fontSize: 22,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    marginLeft: 20,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#9A9A9A",
    marginLeft: 20,
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 335,
    height: 48,
    flexShrink: 0,
    borderRadius: 12,
    marginTop: 32,
    backgroundColor: "#F5F6F8",
    padding: 14,
    fontFamily: "PretendardBold",
    fontSize: 14,
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
    marginTop: 265,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PretendardBold",
  },
  Tag: {
    height: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 26,
  },
  TagText: { color: "#7E7E7E", fontSize: 10, fontWeight: "600" },
});

export default UpdateProfile;

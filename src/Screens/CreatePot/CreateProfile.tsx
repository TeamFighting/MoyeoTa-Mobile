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
import React, { useState } from "react";
import LeftArrow from "../../../assets/svg/leftArrow.svg";
import Ximage from "../../../assets/svg/x_image.svg";
// import ProfileImage from "../../../assets/profileImage.png";
import { useNavigation } from "@react-navigation/native";

export default function CreateProfile() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [name, setName] = React.useState("");

  const onChangeName = (inputName: string) => {
    setName(inputName);
  };

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
      <Text style={styles.title}>프로필을 설정해주세요</Text>
      <Text style={styles.description}>
        모여타에서는 닉네임, 성별, 나이대가 공개되어요
      </Text>
      <View style={styles.middle}>
        {/* <Image
          // source={ProfileImage}
          style={{ marginTop: 52, width: 100, height: 100 }}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="모연두"
          onChangeText={onChangeName}
          value={name}
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
            <Text style={styles.buttonText}>확인</Text>
          </Pressable>
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
  title: {
    marginTop: 41,
    fontSize: 22,
    fontFamily: "PretendardBold",
    fontWeight: "700",
    color: "#000",
    marginLeft: 14,
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: "Pretendard",
    fontWeight: "600",
    color: "#9A9A9A",
    marginLeft: 14,
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
    marginTop: 35,
    backgroundColor: "#F5F6F8",
    padding: 14,
    fontFamily: "Pretendard",
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
    marginTop: 306,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "PretendardBold",
  },
});

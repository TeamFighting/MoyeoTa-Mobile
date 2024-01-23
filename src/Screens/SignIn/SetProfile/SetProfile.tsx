import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../libs/styles/color";
import { useNavigation } from "@react-navigation/native";
import LeftArrow from "../../../../assets/svg/LeftArrowIcon.svg";
import Ximage from "../../../../assets/svg/X_imageIcon.svg";
import RadioButtonsGroup, {
  RadioButtonProps,
} from "react-native-radio-buttons-group";
import RadioButtonGroup from "./Components/RadioButtonGroup";

function SetProfile() {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState<string>();

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 52,
        }}
      >
        <Pressable
          style={{ backgroundColor: "black", width: "100%", height: 24 }}
          onPress={() => navigation.goBack()}
        >
          <LeftArrow style={{ marginLeft: 14 }} />
        </Pressable>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>성별과 나이를</Text>
        <Text style={styles.intro}>알려주세요</Text>
        <Text style={[styles.intro, styles.announcement]}>성별</Text>
        <RadioButtonGroup
          selected={selectedId}
          onSelected={(value) => {
            setSelectedId(value);
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <RadioButtonGroup.RadioButtonItem
              value="남자"
              containerStyle={{ marginTop: 15 }}
            >
              <Text>남자</Text>
            </RadioButtonGroup.RadioButtonItem>
            <RadioButtonGroup.RadioButtonItem
              value="여자"
              containerStyle={{ marginTop: 15 }}
            >
              <Text>여자</Text>
            </RadioButtonGroup.RadioButtonItem>
          </View>
        </RadioButtonGroup>
      </View>
      <View style={styles.icons}>
        <View style={styles.signInBottom}>
          <Pressable onPress={() => {}}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "PretendardBold",
                }}
              >
                완료
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  introContainer: {
    width: "100%",
    paddingLeft: "7%",
    marginTop: 41,
  },
  intro: {
    fontSize: 22,
    fontFamily: "PretendardBold",
  },
  announcement: {
    paddingTop: 15,
    fontSize: 16,
    color: "#9A9A9A",
    fontFamily: "PretendardSemiBold",
  },
  signInTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 27,
    paddingBottom: 18,
  },
  signInMiddle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 64,
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
    marginTop: 300,
  },
  signInBottom: {
    alignItems: "center",
  },
});

export default SetProfile;

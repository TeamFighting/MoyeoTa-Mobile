import React, { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../libs/styles/color";
import { useNavigation } from "@react-navigation/native";
import LeftArrow from "../../../../assets/svg/LeftArrowIcon.svg";
import RadioButtonGroup from "./Components/RadioButtonGroup";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { instance } from "../../../axios";
import { useAuthStore } from "../../../libs/states/authStore";
import { selectAge } from "../../../libs/util/age";
function SetProfile() {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isDateSelected, setisDateSelected] = useState<boolean>(false);
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState<string>();
  const { token } = useAuthStore((state) => state);

  useEffect(() => {
    if (isDateSelected) {
      const today = new Date();
      const birth = new Date(date);
      const age = today.getFullYear() - birth.getFullYear();
      setAge(selectAge(age));
    }
  }, [date]);

  const submit = async () => {
    try {
      const res = await instance.put(
        "/users/info",
        {
          age: age,
          gender: gender,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        alert("성별과 나이가 등록되었습니다.");
        navigation.navigate("Main" as never);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const KR_DIFF = 9 * 60 * 60 * 1000;

  console.log(gender, age);
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
          style={{ width: "100%", height: 24 }}
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
          selected={gender}
          onSelected={(value) => {
            setGender(value);
          }}
        >
          <View
            style={{
              marginLeft: 10,
              display: "flex",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <RadioButtonGroup.RadioButtonItem
              value="M"
              containerStyle={{ marginTop: 15 }}
            >
              <Text>남</Text>
            </RadioButtonGroup.RadioButtonItem>
            <RadioButtonGroup.RadioButtonItem
              value="F"
              containerStyle={{ marginTop: 15 }}
            >
              <Text>여</Text>
            </RadioButtonGroup.RadioButtonItem>
          </View>
        </RadioButtonGroup>
      </View>
      <View style={{ marginLeft: "8%", marginTop: 28 }}>
        <Text style={[styles.intro, styles.announcement]}>나이 (출생연도)</Text>
        <Pressable
          onPress={() => {
            setOpen(true);
          }}
        >
          <View
            style={{
              width: 335,
              height: 48,
              marginTop: 8,
              backgroundColor: "#F5F6F8",
              borderRadius: 12,
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 10, color: colors.darkgray }}>
              {isDateSelected
                ? date.getFullYear() +
                  "년 " +
                  (date.getMonth() + 1) +
                  "월 " +
                  (date.getDate() - 1) +
                  "일 "
                : "출생연도를 선택해주세요"}
            </Text>
          </View>
        </Pressable>
        <DateTimePickerModal
          isVisible={open}
          mode="date"
          onConfirm={(date) => {
            setDate(new Date(date.getTime() + KR_DIFF));
            setOpen(false);
            setisDateSelected(true);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <View style={styles.icons}>
        <View style={styles.signInBottom}>
          <Pressable
            onPress={() => {
              submit();
            }}
          >
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
    marginLeft: 10,
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

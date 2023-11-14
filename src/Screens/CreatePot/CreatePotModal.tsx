import React, { useState, useEffect } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelectedTimeStore } from "../../../zustand/selectedTime";
import { useModalVisibleStore } from "../../../zustand/setModalVisible";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

function CreatePotModal() {
  // newDate로 가져오니 한국 시간이랑 안맞아서 시차 추가
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

  //최초 모달 띄웠을 때 현재 시간으로 설정
  const today = new Date();

  const [timestamp, setTimestamp] = useState(new Date());
  //선택한 시간을 저장
  const { setSelectedTime } = useSelectedTimeStore();

  //모달 띄웠는지 여부
  const { setModalVisible } = useModalVisibleStore();

  const onChange = (event: any, selectedDate: Date | undefined) => {
    // 선택한 시간이 있으면 그 시간으로 설정, 없으면 현재 시간으로 설정
    const currentDate = selectedDate || today;
    //모달에서 선택한 시간을 timestamp로 변환
    setTimestamp(new Date(currentDate.getTime() + KR_TIME_DIFF));
  };
  const onPress = () => {
    setSelectedTime(timestamp);
    setModalVisible(false);
  };

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modal}>
        <Text style={styles.startText}>출발시간</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={today}
          mode="datetime"
          display="spinner"
          onChange={onChange}
          textColor="black"
          locale="ko"
        />
        <Pressable
          style={{
            height: 48,
            backgroundColor: "#1EDD81",
            width: "90%",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text style={styles.selectedText}>선택완료</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
  board: {
    flex: 1,
  },
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    width: "79%",
    height: "44%",
    backgroundColor: "white",
    zIndex: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    gap: 20,
  },
  startText: {
    fontSize: 19,
    fontWeight: "700",
    marginTop: 20,
  },
  selectedText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

export default CreatePotModal;

import React, { useEffect } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
function Reimbursement() {
  useEffect(() => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (location) => {
        console.log(location);
      }
    );
  }, []);
  const trackStart = () => {
    console.log("trackStart");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapContainer}>
        <TouchableOpacity style={styles.btn} onPress={trackStart}>
          <Text
            style={{
              fontSize: 40,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            버튼
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
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
    width: "83%",
    height: "44%",
    backgroundColor: "white",
    zIndex: 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    gap: 20,
  },
  startText: {
    fontSize: 18,
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

export default Reimbursement;

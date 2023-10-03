import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import QuestionMark from "../../../../assets/svg/questionMark.svg";
import { colors } from "../../../styles/color";

function SchoolList({ route, navigation }: { route: any; navigation: any }) {
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
});

export default SchoolList;

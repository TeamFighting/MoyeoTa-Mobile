import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles";
import FavoriteIcon from "../../../../assets/svg/FavoriteIcon.svg";

function FavoritePot() {
  return (
    <View style={Styles.FavoritePot}>
      <FavoriteIcon style={{ width: 24 }} />
      <Text
        style={{
          color: "#343434",
          fontFamily: "Pretendard",
          fontSize: 18,
          fontStyle: "normal",
          fontWeight: "500",
        }}
      >
        찜한 팟
      </Text>
    </View>
  );
}

export default FavoritePot;

import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import { colors } from "../../../styles/color";
import axios from "axios";

function SchoolList({ route, navigation }: { route: any; navigation: any }) {
  const [schoolNames, setSchoolNames] = useState<string[]>([]); // 학교 이름을 저장할 배열

  useEffect(() => {
    const apiUrl = `http://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=${process.env.SCHOOL_API_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list`;

    axios
      .get(apiUrl)
      .then((response) => {
        const responseData = response.data;

        if (
          responseData &&
          responseData.dataSearch &&
          responseData.dataSearch.content
        ) {
          const schoolData = responseData.dataSearch.content;

          const names = schoolData.map((school: any) => school.schoolName);
          setSchoolNames(names);
        } else {
          console.error("잘못된 형식입니다.");
        }
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

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
      <View style={styles.schoolListContainer}>
        <FlatList
          data={schoolNames}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.schoolItem}>{item}</Text>
          )}
        />
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
  schoolListContainer: {
    marginTop: 20,
    marginLeft: "7%",
  },
  schoolItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SchoolList;

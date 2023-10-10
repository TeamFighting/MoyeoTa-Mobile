import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import LeftArrow from "../../../../assets/svg/leftArrow.svg";
import QuestionMark from "../../../../assets/svg/questionMark.svg";
import { colors } from "../../../styles/color";
import axios from "axios";
import xmljs from "xml-js";

function SchoolList({ route, navigation }: { route: any; navigation: any }) {
  const [schoolNames, setSchoolNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredSchoolNames, setFilteredSchoolNames] = useState<string[]>([]);

  useEffect(() => {
    const apiUrl = `http://www.career.go.kr/cnet/openapi/getOpenApi.xml?apiKey=${process.env.SCHOOL_API_KEY}&svcType=api&svcCode=SCHOOL&contentType=xml&gubun=univ_list&thisPage=${currentPage}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const xmlData = response.data;

        const jsonData = xmljs.xml2json(xmlData, { compact: true, spaces: 4 });

        const schoolData = JSON.parse(jsonData).dataSearch.content;
        const names = schoolData.map((school: any) => school.schoolName._text);

        setSchoolNames((prevNames) => [...prevNames, ...names]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
        setIsLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    if (searchText === "") {
      setFilteredSchoolNames(schoolNames);
    } else {
      const filtered = schoolNames.filter((name) => name.includes(searchText));
      setFilteredSchoolNames(filtered);
    }
  }, [searchText, schoolNames]);

  const loadMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (!isLoading && schoolNames.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text>데이터가 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <View style={styles.searchContainer}>
          <QuestionMark style={styles.question} />
          <TextInput
            style={styles.searchInput}
            placeholder="학교 이름으로 검색"
            placeholderTextColor="#7E7E7E"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>
      <View style={styles.schoolListContainer}>
        <FlatList
          data={filteredSchoolNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.schoolItemContainer}>
              <Text style={styles.schoolItem}>{item}</Text>
            </View>
          )}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            isLoading && <ActivityIndicator size="large" color="#000" />
          }
        />
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 52,
    marginBottom: 36,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#9A9A9A",
    borderBottomWidth: 1,
    marginLeft: 10,
    paddingLeft: 30,
    fontFamily: "Pretendard",
  },
  schoolListContainer: {
    marginTop: 8,
    marginLeft: 20,
  },
  schoolItem: {
    fontSize: 14,
    fontFamily: "Pretendard",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  schoolItemContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#E3E3E3",
    marginBottom: 28,
  },
  question: {
    position: "absolute",
    left: 12,
  },
});

export default SchoolList;

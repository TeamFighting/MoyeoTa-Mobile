import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 84,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 21,
  },
  ThickDivider: {
    height: 9,
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  ThinDivider: {
    height: 6,
    width: "100%",
    backgroundColor: "#eeeeee",
  },
  Profile: {
    height: 123,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 14,
    marginLeft: 28,
  },
  ProfileImg: {
    width: 60,
    height: 60,
    backgroundColor: "#eee",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "none",
  },
  Tag: {
    height: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  TagText: { color: "#7E7E7E", fontSize: 10, fontWeight: "600" },
  FavoritePotWrapper: {
    height: 85,
    width: "100%",
    marginTop: 12,
    marginBottom: 36,
  },
  FavoritePot: {
    height: "100%",
    width: "89%",
    backgroundColor: "#eeeeee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 21,
    gap: 6,
  },
  TotalList: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },

  ListText: {
    color: "#343434",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    marginLeft: 16,
  },

  ListWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "89%",
    gap: 16,
  },

  List: {
    height: 24,
    display: "flex",
    flexDirection: "row",
  },

  ContentText: {
    color: "#343434",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
  },
  Icon: {},
});

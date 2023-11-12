import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../MainPage/MainPage";
import MyPage from "../MyPage/MyPage";
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={MainPage}
      />

      <Tab.Screen
        name="Settings"
        options={{ headerShown: false }}
        component={MyPage}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;

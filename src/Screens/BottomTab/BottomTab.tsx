import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../MainPage/MainPage";
import MyPage from "../MyPage/MyPage";
import Home from "../../../assets/svg/Home.svg";
import User from "../../../assets/svg/User.svg";
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        options={{
          title: "홈",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Home width={size} height={size} fill={color} />
          ),
        }}
        component={MainPage}
      />

      <Tab.Screen
        name="내정보"
        options={{
          headerShown: false,
          title: "내정보",
          tabBarIcon: ({ color, size }) => (
            <User width={size} height={size} fill={color} />
          ),
        }}
        component={MyPage}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;

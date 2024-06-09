import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../MainPage";
import HomeIcon from "../../../assets/svg/HomeIcon.svg";
import UserIcon from "../../../assets/svg/UserIcon.svg";
import MyPage from "../MyPage/MyPage";
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
            <HomeIcon width={size} height={size} fill={color} />
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
            <UserIcon width={size} height={size} fill={color} />
          ),
        }}
        component={MyPage}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;

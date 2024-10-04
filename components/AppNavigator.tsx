import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LibraryScreen from "./LibraryScreen";
import WishListScreen from "./WishListScreen";
import FriendListScreen from "./FriendListScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import AppHeader from "./AppHeader";
import AddBookScreen from "./AddBookScreen";
import MyBookDetails from "./MyBookDetails";
import MyBookProgress from "./MyBookProgress";
import FriendScreen from "./FriendScreen";
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Library" component={LibraryScreen} />
      <BottomTab.Screen name="Wish List" component={WishListScreen} />
      <BottomTab.Screen name="Friend List" component={FriendListScreen} />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarButton: () => null }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ tabBarButton: () => null }}
      />
      <BottomTab.Screen
        name="Add a book"
        component={AddBookScreen}
        options={{
          tabBarButton: () => null,
          header: () => <AppHeader returnTo={"Explore"} />,
        }}
      />
      <BottomTab.Screen
        name="My book details"
        component={MyBookDetails}
        options={{
          tabBarButton: () => null,
          header: () => <AppHeader />,
        }}
      />
      <BottomTab.Screen
        name="My book progress"
        component={MyBookProgress}
        options={{
          tabBarButton: () => null,
          header: () => <AppHeader returnTo={"Library"} />,
        }}
      />
      <BottomTab.Screen
        name="Friend page"
        component={FriendScreen}
        options={{
          tabBarButton: () => null,
          header: () => <AppHeader returnTo={"Friend List"} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;

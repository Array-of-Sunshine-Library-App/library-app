import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LibraryScreen from "./LibraryScreen";
import WishListScreen from "./WishListScreen";
import FriendsScreen from "./FriendsScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import AppHeader from "./AppHeader";
import AddBookScreen from "./AddBookScreen";
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Library" component={LibraryScreen} />
      <BottomTab.Screen name="Wish List" component={WishListScreen} />
      <BottomTab.Screen name="Friends" component={FriendsScreen} />
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
    </BottomTab.Navigator>
  );
};

export default AppNavigator;

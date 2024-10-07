import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
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
import RegisterNewUser from "./RegisterNewUser";
const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  const iconSize = 36;
  const viewSize = 44;
  return (
    <BottomTab.Navigator screenOptions={{ header: () => <AppHeader /> }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                width: viewSize,
                height: viewSize,
                backgroundColor: focused ? "#fff" : "transparent",
                borderRadius: viewSize / 2,
                shadowColor: focused ? "#2854C5" : "transparent",
                shadowRadius: focused ? 10 : 0,
                elevation: focused ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/Home-nav-selected.png")
                    : require("../assets/Home-nav.png")
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                width: viewSize,
                height: viewSize,
                backgroundColor: focused ? "#fff" : "transparent",
                borderRadius: viewSize / 2,
                shadowColor: focused ? "#2854C5" : "transparent",
                shadowRadius: focused ? 10 : 0,
                elevation: focused ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/Library-nav-selected.png")
                    : require("../assets/Library-nav.png")
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Wish List"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                width: viewSize,
                height: viewSize,
                backgroundColor: focused ? "#fff" : "transparent",
                borderRadius: viewSize / 2,
                shadowColor: focused ? "#2854C5" : "transparent",
                shadowRadius: focused ? 10 : 0,
                elevation: focused ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/Wishlist-nav-selected.png")
                    : require("../assets/Wishlist-nav.png")
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen
        name="Friend List"
        component={FriendListScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View
              style={{
                width: viewSize,
                height: viewSize,
                backgroundColor: focused ? "#fff" : "transparent",
                borderRadius: viewSize / 2,
                shadowColor: focused ? "#2854C5" : "transparent",
                shadowRadius: focused ? 10 : 0,
                elevation: focused ? 10 : 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={
                  focused
                    ? require("../assets/Friends-nav-selected.png")
                    : require("../assets/Friends-nav.png")
                }
                style={{
                  width: iconSize,
                  height: iconSize,
                }}
              />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
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
        name="New User"
        component={RegisterNewUser}
        options={{
          tabBarButton: () => null,
          header: () => <AppHeader returnTo={"ProfileScreen"} />,
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

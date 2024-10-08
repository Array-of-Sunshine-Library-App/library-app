import React from "react";
import { Text, View, StyleSheet, ViewComponent } from "react-native";
import FriendSearchBar from "./FriendSearchBar";
import FriendRequests from "./FriendRequests";
import FriendList from "./FriendList";

const FriendListScreen = () => {
  return (
    <View>
      <FriendSearchBar />
      <View>
        <FriendRequests />
        <FriendList />
      </View>
    </View>
  );
};

export default FriendListScreen;

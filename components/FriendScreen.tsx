import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StatBlock from "./StatBlock";

const FriendScreen = ({ route }) => {
  const { friend } = route.params;
  return (
    <View style={styles.page}>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{friend.name}</Text>
      </View>
      <StatBlock friend={friend} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    gap: 10,
  },
  usernameContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default FriendScreen;

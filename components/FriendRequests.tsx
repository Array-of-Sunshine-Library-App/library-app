import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import { getLibrary } from "../axiosRequests.ts";
import axios from "axios";

const devUsers = [
  {
    userID: 3,
    name: "Josh Martin",
    readingStats: {
      booksRead: 411,
      totalPagesRead: 123308,
      booksLent: 0,
      numberBooksBorrowed: 0,
    },
  },
  {
    userID: 4,
    name: "Jackson Greaves",
    readingStats: {
      booksRead: 511,
      totalPagesRead: 212308,
      booksLent: 10,
      numberBooksBorrowed: 11,
    },
  },
  {
    userID: 4,
    name: "Carmen",
    readingStats: {
      booksRead: 511,
      totalPagesRead: 212308,
      booksLent: 13,
      numberBooksBorrowed: 12,
    },
  },
];

const FriendRequests = () => {
  const [users, setUsers] = useState<any[]>(devUsers);

  return (
    <View>
      <Text>Friend requests:</Text>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <FriendCard key={index} friend={item} />
        )}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    color: "black",
  },
});

export default FriendRequests;

import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";

const devUsers = [
  {
    userID: 5,
    name: "Harry Potter",
    readingStats: {
      booksRead: 411,
      totalPagesRead: 123308,
      booksLent: 5,
      numberBooksBorrowed: 10,
    },
  },
  {
    userID: 6,
    name: "Tim",
    readingStats: {
      booksRead: 11,
      totalPagesRead: 212308,
      booksLent: 5,
      numberBooksBorrowed: 4,
    },
  },
  {
    userID: 7,
    name: "Mario",
    readingStats: {
      booksRead: 321,
      totalPagesRead: 212308,
      booksLent: 1,
      numberBooksBorrowed: 2,
    },
  },
];

const FriendList = () => {
  const [users, setUsers] = useState<any[]>(devUsers);

  return (
    <View>
      <Text>Your friends:</Text>
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

export default FriendList;

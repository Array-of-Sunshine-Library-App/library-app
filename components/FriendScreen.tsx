import React, { useState, useEffect } from "react";
import functions from "../axiosRequests";
import { Text, View, StyleSheet } from "react-native";
import MainBooksContainer from "./MainBooksContainer";
//import StatBlock from "./StatBlock";

const FriendScreen = ({ route }) => {
  const { friend } = route.params;
  const [books, setBooks] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    functions
      .getLendableFriends(friend.username)
      .then((books) => {
        setBooks(books);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{friend.name}</Text>
      </View>
      <View style={{ width: "100%", height: "100%" }}>
        {isLoaded ? (
          <MainBooksContainer
            page={"friend"}
            books={books}
            isLoaded={isLoaded}
          />
        ) : null}
      </View>
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

import React, { useState, useEffect } from "react";
import functions from "../axiosRequests";
import { Text, View, StyleSheet } from "react-native";
import MainBooksContainer from "./MainBooksContainer";

const FriendScreen = ({ route }: any) => {
  const { friend } = route.params;
  const [books, setBooks] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [lendableNumber, setLendableNumber] = useState<number>();

  useEffect(() => {
    setBooks([]);
    setIsLoaded(false);
    //setLendableNumber(0);

    functions
      .getLendableFriends(friend.username)
      .then((result) => {
        setLendableNumber(result.data.length);
        setBooks(result.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [friend.username]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.usernameContainer}>
        <Text style={styles.subtitleText}>
          You can borrow {lendableNumber} books from{" "}
          <Text style={styles.friendUsername}>{friend.username}</Text>
        </Text>
      </View>
      <View style={{ width: "100%", height: "100%" }}>
        {isLoaded ? (
          <MainBooksContainer
            page={"explore"}
            ownerUsername={friend.username}
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
  subtitleText: {
    color: "black",
    textAlign: "left",
    marginVertical: 10,

    fontSize: 16,
    fontWeight: "bold",
  },
  friendUsername: {
    color: "#f17127",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default FriendScreen;

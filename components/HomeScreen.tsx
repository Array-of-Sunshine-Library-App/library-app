import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import StatBlock from "./StatBlock";
import { UserContext } from "../contexts/UserContext";
import BookShelf from "./BookShelf";
import functions from "../axiosRequests";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  const [booksBorrorwing, setBooksBorrowing] = useState([]);
  const [booksLending, setBooksLending] = useState([]);
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = `Good morning, ${user.username}!`;
  } else if (currentHour < 18) {
    greeting = `Good afternoon, ${user.username}!`;
  } else {
    greeting = `Good evening, ${user.username}!`;
  }

  useEffect(() => {
    functions.getBorrowingList(user.username).then((response) => {
      console.log(response);
      setBooksBorrowing(response);
    });
  }, []);

  useEffect(() => {
    functions.getLendingList(user.username).then((response) => {
      setBooksLending(response);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>
      <StatBlock friend={user} />
      <Text>Books you're borrowing:</Text>
      <BookShelf books={booksBorrorwing} page={"borrowing"} />
      <Text>Books you're lending:</Text>
      <BookShelf books={booksLending} page={"lending"} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkslategray",
  },
});

export default HomeScreen;

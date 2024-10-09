import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import StatBlock from "./StatBlock";
import { UserContext } from "../contexts/UserContext";
import BookShelf from "./BookShelf";
import functions from "../axiosRequests";
import { ScrollView } from "react-native";
import { HomeUpdateContext } from "../contexts/HomeUpdateContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  const { homeUpdate } = useContext(HomeUpdateContext);
  const [booksBorrorwing, setBooksBorrowing] = useState([]);
  const [booksLending, setBooksLending] = useState([]);
  const [lendingRequests, setLendingRequests] = useState([]);
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = `Good morning, ${user.name}!`;
  } else if (currentHour < 18) {
    greeting = `Good afternoon, ${user.name}!`;
  } else {
    greeting = `Good evening, ${user.name}!`;
  }

  useEffect(() => {
    functions.getBorrowingList(user.username).then((response) => {
      setBooksBorrowing(response);
    });
  }, [user, homeUpdate]);

  useEffect(() => {
    functions.getLendingList(user.username).then((response) => {
      setBooksLending(response);
    });
  }, [user, homeUpdate]);

  useEffect(() => {
    functions.getAllBorrowRequests(user.username).then((response) => {
      setLendingRequests(response);
    });
  }, [user, homeUpdate]);

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.greeting}>{greeting}</Text>
      </View>
      <StatBlock friend={user} />
      {lendingRequests.length > 0 ? (
        <>
          <Text>Borrow requests:</Text>
          <BookShelf books={lendingRequests} page={"request"} />
        </>
      ) : null}
      <Text>Books you're borrowing:</Text>
      <BookShelf books={booksBorrorwing} page={"borrowing"} />
      <Text>Books you're lending:</Text>
      <BookShelf books={booksLending} page={"lending"} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
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

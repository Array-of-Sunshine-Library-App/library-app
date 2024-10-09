import React from "react";
import { View, StyleSheet } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import LendingBox from "./LendingBox";

const LendingScreen = ({ route }) => {
  const { book } = route.params;
  const currentlyLent = !book.hasOwnProperty("requests");

  return (
    <View style={styles.page}>
      <BookBasicDetails book={book} />
      {currentlyLent ? (
        <LendingBox book={book} borrower={book.borrower} lent={true} />
      ) : (
        Object.keys(book.requests).map((borrower) => {
          return (
            <LendingBox
              key={borrower}
              book={book}
              borrower={borrower}
              lent={false}
            />
          );
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    gap: 10,
  },
});

export default LendingScreen;

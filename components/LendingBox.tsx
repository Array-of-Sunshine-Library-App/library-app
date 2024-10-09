import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const LendingBox = ({ book }) => {
  const [currentlyBorrowing, setCurrentlyBorrowing] = useState(false);
  const borrower = "Mr Adams";
  const date = "3 months";

  const handleConfirmBorrowRequest = () => {
    //api call goes here
    setCurrentlyBorrowing(true);
  };

  const handleRejectBorrowRequest = () => {
    //api call goes here
    //routing goes here
  };

  const handleReturnBookAfterBorrow = () => {
    //api call goes here
    //routing goes here
  };

  return (
    <View style={styles.requestToLendContainer}>
      <Text>
        {borrower} {currentlyBorrowing ? "is borrowing" : "wants to borrow"}{" "}
        this book!
      </Text>
      <View style={styles.dateContainer}>
        <Text>
          {currentlyBorrowing ? "Due back in" : "Lend for"} {date}
        </Text>
      </View>
      {currentlyBorrowing ? (
        <View style={styles.container}>
          <Pressable
            style={[styles.actionButton, { backgroundColor: "green" }]}
            onPress={handleReturnBookAfterBorrow}
          >
            <Text style={styles.pressableText}>I've got this book back</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Pressable
            style={[styles.actionButton, { backgroundColor: "grey" }]}
            onPress={handleRejectBorrowRequest}
          >
            <Text style={styles.pressableText}>Delete request</Text>
          </Pressable>
          <Pressable
            style={[styles.actionButton, { backgroundColor: "green" }]}
            onPress={handleConfirmBorrowRequest}
          >
            <Text style={styles.pressableText}>Confirm</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "lightgrey",
    width: "100%",
    borderRadius: 10,
  },

  actionButton: {
    padding: 10,
    borderRadius: 5,
  },

  pressableText: {
    color: "white",
    fontWeight: "bold",
  },

  requestToLendContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "white",
    gap: 10,
  },
});

export default LendingBox;

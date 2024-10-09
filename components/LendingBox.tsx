import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { ThemedButton } from "react-native-really-awesome-button";

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
        <View style={styles.returnContainer}>
          <ThemedButton
            style={styles.actionButton}
            raiseLevel={1}
            name="bruce"
            type="secondary"
            textColor="green"
            borderColor="green"
            onPress={handleReturnBookAfterBorrow}
          >
            I've got this book back
          </ThemedButton>
        </View>
      ) : (
        <View style={styles.container}>
          <ThemedButton
            raiseLevel={1}
            width={130}
            name="bruce"
            type="secondary"
            textColor="red"
            borderColor="red"
            onPress={handleRejectBorrowRequest}
          >
            Delete request
          </ThemedButton>
          <ThemedButton
            raiseLevel={1}
            width={130}
            name="bruce"
            type="secondary"
            textColor="green"
            borderColor="green"
            onPress={handleConfirmBorrowRequest}
          >
            Confirm
          </ThemedButton>
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
  returnContainer: {
    flexDirection: "column",
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
    flexDirection: "row",
    justifyContent: "center",
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

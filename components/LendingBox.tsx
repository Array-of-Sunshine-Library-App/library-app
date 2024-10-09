import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const LendingBox = ({ book }) => {
  const handleConfirmBorrowRequest = () => {};
  const handleRejectBorrowRequest = () => {};
  const handleReturnBookAfterBorrow = () => {};
  const borrower = "Mr Adams";
  const date = "1 month";

  return (
    <View style={styles.requestToLendContainer}>
      <Text>{borrower} wants to borrow this book!</Text>
      <View style={styles.container}>
        <Text>{date}</Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
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

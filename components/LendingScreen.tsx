import React from "react";
import { View, StyleSheet } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import LendingBox from "./LendingBox";

const LendingScreen = ({ route }) => {
  const { book } = route.params;
  return (
    <View style={styles.page}>
      <BookBasicDetails book={book} />
      <LendingBox book={book} />
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

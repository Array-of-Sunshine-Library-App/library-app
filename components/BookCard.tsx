import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const BookCard = ({ isLoaded }) => {
  return <View style={styles.card}></View>;
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    width: width / 4 - 10,
    height: 150,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "beige",
  },
});

export default BookCard;

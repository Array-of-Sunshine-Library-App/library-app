import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width / 3 - 10;
const cardHeight = cardWidth * 1.5;

const BookBasicDetails = ({ book }: any) => {
  const authorsString = book.authors.join(", ");

  return (
    <View style={styles.outerFrame}>
      <Image style={styles.image} source={{ uri: book.thumbnail }} />
      <View style={styles.innerFrame}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.authors}>{authorsString}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerFrame: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    width: cardWidth,
    height: cardHeight,
    resizeMode: "cover",
  },
  innerFrame: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  authors: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookBasicDetails;

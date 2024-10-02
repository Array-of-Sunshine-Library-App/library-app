import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

type BookCardProps = {
  isLoaded: boolean;
  coverURL: string;
  location: string;
}

let booksPerRow = 4

const BookCard = ({ isLoaded, coverURL, location }:BookCardProps) => {
  booksPerRow = (location === "explore") ? 3 : 4;
  return (
    <View style={styles.card}>
      {isLoaded ? (
        <Image style={styles.image} source={{ uri: coverURL }} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const { width } = Dimensions.get("window");
const cardWidth = width / booksPerRow - 10;
const cardHeight = cardWidth * 1.5;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardHeight,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
  },
});

export default BookCard;

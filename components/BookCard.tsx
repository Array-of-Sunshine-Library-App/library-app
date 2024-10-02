import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

type BookCardProps = {
  key: number;
  isLoaded: boolean;
  thumbnail: string;
  page: string;
};

let booksPerRow = 4;

const BookCard = ({ isLoaded, thumbnail, page }: BookCardProps) => {
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    booksPerRow = page === "explore" ? 3 : 4;
    const { width } = Dimensions.get("window");
    setCardWidth(width / booksPerRow - 10);
    setCardHeight((width / booksPerRow - 10) * 1.5);
  }, [page]);

  return (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      {isLoaded ? (
        <Image style={styles.image} source={{ uri: thumbnail }} />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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

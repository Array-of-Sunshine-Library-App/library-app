import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type BookCardProps = {
  key: number;
  isLoaded: boolean;
  book: {
    title: string;
    authors?: any[];
    description?: string;
    thumbnail: string;
  };
  page: string;
};

let booksPerRow = 4;

const BookCard = ({ isLoaded, book, page }: BookCardProps) => {
  const navigation = useNavigation();
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    booksPerRow = page === "explore" ? 3 : 4;
    const { width } = Dimensions.get("window");
    setCardWidth(width / booksPerRow - 10);
    setCardHeight((width / booksPerRow - 10) * 1.5);
  }, [page]);

  return (
    <Pressable
      onPress={
        isLoaded
          ? () =>
              navigation.navigate(
                page === "explore" ? "Add a book" : "My book progress",
                { book }
              )
          : null
      }
    >
      <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
        {isLoaded ? (
          <Image
            style={styles.image}
            source={{
              uri:
                page === "explore" ? book.thumbnail : book.imageLinks.thumbnail,
            }}
          />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
    </Pressable>
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

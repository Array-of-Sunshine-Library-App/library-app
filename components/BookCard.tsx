import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type BookCardProps = {
  isLoaded: boolean;
  book: {
    title: string;
    authors?: any[];
    description?: string;
    thumbnail: string;
  };
  page: string;
  ownerUsername : string;
};

let booksPerRow = 4;

const BookCard = ({ isLoaded, book, page, ownerUsername }: BookCardProps) => {
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
                { book, ownerUsername }
              )
          : null
      }
    >
      <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
        {isLoaded ? (
          book.thumbnail ? (
            <Image style={styles.image} source={{ uri: book.thumbnail }} />
          ) : (
            <ImageBackground
              source={require("../assets/book-placeholder.png")}
              style={styles.bookplaceholder}
              resizeMode="cover" // or "contain", based on your preference
            >
              <View>
                <Text style={styles.title}>{book.title}</Text>
              </View>
            </ImageBackground>
          )
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

  bookplaceholder: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
  },

  title: {
    marginTop: 10,
    margin: 6,
    fontSize: 16,
    fontWeight: "medium",
    color: "white",
    textAlign: "center",
  },
});

export default BookCard;

import React, { useContext } from "react";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";
import functions from "../axiosRequests";
import { UserContext } from "../contexts/UserContext";
import { BookAddContext } from "../contexts/BookAddContext";

const MyBookProgress = ({ route }: any) => {
  const { book, page } = route.params;
  const { deleteWishlistBook } = functions;
  const { user } = useContext(UserContext);
  const { addBook, setAddBook } = useContext(BookAddContext);
  const navigation = useNavigation();

  const handleDelete = () => {
    deleteWishlistBook(user.username, book.bookId)
      .then(() => {
        if (addBook === null) {
          setAddBook(book);
        } else {
          setAddBook(null);
        }
        navigation.navigate("Wish List");
      })
      .catch(() => {});
  };

  //   const handleAddToLibrary = () => {
  //     //post to library
  //     navigation.navigate("My book details", { book });
  //   };

  return (
    <ScrollView style={styles.page}>
      <BookBasicDetails book={book} />
      <Text>{book.description}</Text>
      <View style={styles.container}>
        {page === "wishlist" ? (
          <Pressable
            onPress={handleDelete}
            style={[styles.button, { backgroundColor: "red" }]}
          >
            <Text style={styles.buttonText}>Delete from Wishlist</Text>
          </Pressable>
        ) : null}
        <Pressable
          style={[styles.button, { backgroundColor: "grey" }]}
          onPress={() => navigation.navigate("My book details", { book })}
        >
          <Text style={styles.buttonText}>Book settings</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  button: {
    margin: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  page: {
    padding: 15,
    gap: 10,
  },
});

export default MyBookProgress;

import React, { useContext, useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { BookAddContext } from "../contexts/BookAddContext";
import functions from "../axiosRequests";

const AddBookScreen = ({ route }: any) => {
  const { book, ownerUsername } = route.params;

  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);

  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    setIsRequested(false);
  }, [book]);

  const { setAddBook } = useContext(BookAddContext);

  const navigation = useNavigation();

  const handleAddToLibrary = () => {
    book.isOwned = true;
    book.isPhysical = true;
    book.isLendable = true;
    book.isRead = false;
    book.privateNotes = "";
    book.offAppBorrower = "";
    book.review = "";
    book.rating = 0;

    axios
      .post(
        `https://hosting-api-yiyu.onrender.com/api/users/${user.username}/books`,
        book
      )
      .then((response: any) => {
        navigation.navigate("My book details", { book });
      })
      .catch((err: any) => {
        setError("Error posting book to library");
      });
  };

  const handleSendRequest = () => {
    console.log(user.username, book.bookId, ownerUsername);
    functions
      .postBookBorrowRequest(user.username, book.bookId, ownerUsername)
      .then((response: any) => {
        setIsRequested(true);
      })
      .catch((err: any) => {
        setError("Error sending borrow request");
      });
  };

  const handleAddToWishlist = () => {
    functions
      .postWishlist(user.username, book)
      .then((response: any) => {
        setAddBook(book);
        navigation.navigate("Wish List");
      })
      .catch((err) => {
        setError("Error posting book to wishlist");
      });
  };

  return (
    <ScrollView>
      <View style={styles.page}>
        <BookBasicDetails book={book} />
        <Text>{book.description}</Text>

        {book.isLendable ? (
          <>
            <View style={styles.requestToBorrowContainer}>
              <Pressable
                style={[styles.button, { backgroundColor: "grey" }]}
                onPress={handleSendRequest}
              >
                <Text style={styles.buttonText}>
                  {isRequested ? "Requested!" : "Request to borrow"}
                </Text>
              </Pressable>
            </View>
          </>
        ) : null}

        <View style={styles.container}>
          <Pressable style={styles.actionButton} onPress={handleAddToWishlist}>
            <Text style={styles.pressableText}>Add to Wishlist</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={handleAddToLibrary}>
            <Text style={styles.pressableText}>Add to Library</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  actionButton: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },

  pressableText: {
    color: "white",
    fontWeight: "bold",
  },

  page: {
    flex: 1,
    padding: 20,
  },

  requestToBorrowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 12,
    borderRadius: 5,
  },
});

export default AddBookScreen;

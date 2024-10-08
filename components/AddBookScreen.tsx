import React, { useContext, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import functions from "../axiosRequests";

const AddBookScreen = ({ route }) => {
  const { book } = route.params;
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isRequested, setIsRequested] = useState;

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
//     functions.requestToBorrow(user.username, friend).then(() => {
//       setIsFriend(true);
//       setIsIncomingFriendRequest(false);
//       setUpdated(1);
    });

  const handleAddToWishlist = () => {
    functions
      .postWishlist(user.username, book)
      .then((response: any) => {
        navigation.navigate("Wish List");
      })
      .catch((err) => {
        setError("Error posting book to wishlist");
      });

  };

  return (
    <View style={styles.page}>
      <BookBasicDetails book={book} />
      <Text>{book.description}</Text>

      {book.isLendable ? (
        <>
          <View style={styles.requestToBorrowContainer}>
            <Pressable style={styles.actionButton} onPress={handleSendRequest}>
              <Text style={styles.pressableText}>Request to borrow</Text>
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
    backgroundColor: "blue",
    borderRadius: 5,
  },

  pressableText: {
    color: "white",
    fontWeight: "bold",
  },

  page: {
    padding: 20,
    gap: 10,
  },

  requestToBorrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default AddBookScreen;

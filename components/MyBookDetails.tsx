import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";
import functions from "../axiosRequests";
import { BookAddContext } from "../contexts/BookAddContext";
import { ThemedButton } from "react-native-really-awesome-button";

const MyBookDetails = ({ route }: any) => {
  const { book } = route.params;
  const { user } = useContext(UserContext);
  const { setAddBook } = useContext(BookAddContext);
  const { postLibrary, deleteLibraryBook, postWishlist } = functions;
  const navigation = useNavigation();

  const [isOwned, setIsOwned] = useState(book.isOwned);
  const [isPhysical, setIsPhysical] = useState(book.isPhysical);
  const [isLendable, setIsLendable] = useState(book.isLendable);
  const [isRead, setIsRead] = useState(book.isRead);
  const [privateNotes, setPrivateNotes] = useState(book.privateNotes);
  const [offAppBorrower, setOffAppBorrower] = useState(book.offAppBorrower);
  const [review, setReview] = useState(book.review);
  const [rating, setRating] = useState(book.rating);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsOwned(book.isOwned);
    setIsPhysical(book.isPhysical);
    setIsLendable(book.isLendable);
    setIsRead(book.isRead);
    setPrivateNotes(book.privateNotes);
    setOffAppBorrower(book.offAppBorrower);
    setReview(book.review);
    setRating(book.rating);
  }, [book]);

  const handleSave = () => {
    if (!isOwned && !isRead) {
      setModalVisible(true);
    } else {
      book.isOwned = isOwned;
      book.isPhysical = isPhysical;
      book.isLendable = isLendable;
      book.isRead = isRead;
      book.privateNotes = privateNotes;
      book.offAppBorrower = offAppBorrower;
      book.review = review;
      book.rating = rating;
      postLibrary(user.username, book)
        .then(() => {
          navigation.navigate("My book progress", { book });
        })
        .catch(() => {
          setError("Error patching book in library");
        });
    }
    setAddBook(book);
  };

  const handleDelete = () => {
    deleteLibraryBook(user.username, book.bookId)
      .then(() => {
        setAddBook(null);
        setModalVisible(false);
        navigation.navigate("Library");
      })
      .catch(() => {
        setError("Error deleting book from your library");
      });
  };

  const handleMoveToWishlist = () => {
    book.isOwned = isOwned;
    book.isPhysical = isPhysical;
    book.isLendable = isLendable;
    book.isRead = isRead;
    book.privateNotes = privateNotes;
    book.offAppBorrower = offAppBorrower;
    book.review = review;
    book.rating = rating;
    postWishlist(user.username, book)
      .then(() => {
        deleteLibraryBook(user.username, book.bookId);
      })
      .then(() => {
        setModalVisible(false);
        setAddBook(book);
        navigation.navigate("Wish List");
      })
      .catch(() => {
        setError("Error moving this book to your wishlist");
      });
  };

  const stars = [1, 2, 3, 4, 5];
  const handleRating = (star: number) => {
    setRating(star);
  };

  return (
    <ScrollView style={styles.container}>
      <Modal
        style={styles.modal}
        animationType="none"
        visible={modalVisible}
        transparent={true}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalContainer}>
          <ThemedButton
            stretch={true}
            textColor="green"
            borderColor="green"
            width={150}
            raiseLevel={1}
            name="bruce"
            type="secondary"
            onPress={handleMoveToWishlist}
          >
            Add this book to my wishlist
          </ThemedButton>
          <ThemedButton
            textColor="red"
            stretch={true}
            borderColor="red"
            raiseLevel={1}
            name="bruce"
            type="secondary"
            onPress={handleDelete}
          >
            Delete this book from my library
          </ThemedButton>
          <ThemedButton
            stretch={true}
            raiseLevel={1}
            name="bruce"
            type="secondary"
            onPress={() => setModalVisible(false)}
          >
            Cancel
          </ThemedButton>
        </View>
      </Modal>
      <BookBasicDetails book={book} />
      <View style={styles.section}>
        <View style={styles.switchRow}>
          <Switch value={isOwned} onValueChange={setIsOwned} />
          <Text>I own this book</Text>
        </View>
        {isOwned ? (
          <>
            <View style={styles.switchRow}>
              <Switch value={isPhysical} onValueChange={setIsPhysical} />
              <Text>It's a physical book</Text>
            </View>
            <View style={styles.switchRow}>
              <Switch value={isLendable} onValueChange={setIsLendable} />
              <Text>I am happy to lend this out</Text>
            </View>
          </>
        ) : null}
      </View>
      <View style={styles.section}>
        <Text>Private notes</Text>
        <TextInput
          style={[styles.textInput, { height: 72 }]}
          placeholder="Write your notes here (only you can see what you write here)"
          placeholderTextColor="grey"
          value={privateNotes}
          onChangeText={setPrivateNotes}
          multiline={true}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="If this book is currently being borrowed by someone not using this app, add their name here"
          placeholderTextColor="grey"
          value={offAppBorrower}
          onChangeText={setOffAppBorrower}
          multiline={true}
        />
      </View>
      <View style={styles.section}>
        <View style={styles.switchRow}>
          <Switch value={isRead} onValueChange={setIsRead} />
          <Text>I have read this book</Text>
        </View>
        {isRead ? (
          <>
            <TextInput
              style={[styles.textInput, { height: 72 }]}
              placeholder="Write a review"
              placeholderTextColor="grey"
              value={review}
              onChangeText={setReview}
              multiline={true}
            />
            <View style={styles.ratingRow}>
              {stars.map((star) => (
                <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                  <Image
                    style={styles.star}
                    source={
                      rating >= star
                        ? require("../assets/star-filled.png")
                        : require("../assets/star-outline.png")
                    }
                  />
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : null}
      </View>
      <View style={styles.section}>
        <ThemedButton
          stretch={true}
          textColor="green"
          borderColor="green"
          width={150}
          raiseLevel={1}
          name="bruce"
          type="secondary"
          onPress={handleSave}
        >
          Save
        </ThemedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap: 5,
  },
  container: {
    padding: 15,
  },
  section: {
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    width: 40,
    height: 40,
    margin: 5,
  },

  button: {
    backgroundColor: "green",
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

  modal: {
    flexGrow: 0,
  },

  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: "center",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.5,
  },
});

export default MyBookDetails;

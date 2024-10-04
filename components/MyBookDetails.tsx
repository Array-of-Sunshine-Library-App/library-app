import React, { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const MyBookDetails = ({ route }) => {
  const { book } = route.params;

  const navigation = useNavigation();

  const [isOwned, setIsOwned] = useState(true);
  const [isPhysical, setIsPhysical] = useState(true);
  const [isLendable, setIsLendable] = useState(true);
  const [isRead, setIsRead] = useState(false);
  const [privateNotes, setPrivateNotes] = useState("");
  const [offAppBorrower, setOffAppBorrower] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    if (!isOwned && !isRead) {
      setModalVisible(true);
    } else {
      //patch book
      console.log({
        isOwned,
        isPhysical,
        isLendable,
        isRead,
        privateNotes,
        offAppBorrower,
        review,
        rating,
      });
      navigation.navigate("My book progress", { book });
    }
  };

  const handleDelete = () => {
    //api call
    setModalVisible(false);
    navigation.navigate("Library");
  };

  const handleMoveToWishlist = () => {
    //api call
    setModalVisible(false);
    navigation.navigate("Wish List");
  };

  const stars = [1, 2, 3, 4, 5];
  const handleRating = (star: number) => {
    setRating(star);
  };

  return (
    <View style={styles.container}>
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
          <Pressable
            style={[styles.button, { backgroundColor: "green" }]}
            onPress={handleMoveToWishlist}
          >
            <Text>Add this book to my wishlist</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={handleDelete}
          >
            <Text>Delete this book from my library</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: "grey" }]}
            onPress={() => setModalVisible(false)}
          >
            <Text>Cancel</Text>
          </Pressable>
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
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>
    </View>
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

import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";

const AddBookScreen = ({ route }) => {
  const { book } = route.params;

  const navigation = useNavigation();

  const handleAddToLibrary = () => {
    //post to library
    navigation.navigate("My book details", { book });
  };

  return (
    <View style={styles.page}>
      <BookBasicDetails book={book} />
      <Text>{book.description}</Text>
      <View style={styles.container}>
        <Pressable style={styles.actionButton}>
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
});

export default AddBookScreen;

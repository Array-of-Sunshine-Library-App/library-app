import React from "react";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import BookBasicDetails from "./BookBasicDetails";
import { useNavigation } from "@react-navigation/native";

const MyBookProgress = ({ route }) => {
  const { book } = route.params;

  const navigation = useNavigation();

  //   const handleAddToLibrary = () => {
  //     //post to library
  //     navigation.navigate("My book details", { book });
  //   };

  return (
    <ScrollView style={styles.page}>
      <BookBasicDetails book={book} />
      <Text>{book.description}</Text>
      <View style={styles.container}>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },

  button: {
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

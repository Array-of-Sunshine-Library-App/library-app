import React from "react";
import { Text, View } from "react-native";
import BookBasicDetails from "./BookBasicDetails";

const AddBookScreen = ({route}) => {
  const {book} = route.params;

    return (
    <View>
      <Text>Add a book</Text>
      <BookBasicDetails book={book}/>
      <Text>{book.description}</Text>
    </View>
  );
};

export default AddBookScreen;



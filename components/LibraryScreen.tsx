import React from "react";
import { Text, View, StyleSheet, ViewComponent } from "react-native";
import MainBooksContainer from "./MainBooksContainer";

const LibraryScreen = () => {
  return (
    <View>
      <Text>Library Page</Text>
      <MainBooksContainer />
    </View>
  );
};

export default LibraryScreen;

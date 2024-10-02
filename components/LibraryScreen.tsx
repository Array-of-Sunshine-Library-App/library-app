import React from "react";
import MainBooksContainer from "./MainBooksContainer";
import FloatingAddButton from "./FloatingAddButton";
import { View } from "react-native";

const LibraryScreen = () => {
  return (
    <>
    <MainBooksContainer location={"library"} />
    <FloatingAddButton />
    </>
  );
};

export default LibraryScreen;

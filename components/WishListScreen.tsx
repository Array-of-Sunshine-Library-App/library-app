import React from "react";
import FloatingAddButton from "./FloatingAddButton";
import MainBooksContainer from "./MainBooksContainer";

const WishListScreen = () => {
  return (
    <>
      <MainBooksContainer page={"wishlist"} />
      <FloatingAddButton />
    </>
  );
};

export default WishListScreen;

import React from "react";
import MainBooksContainer from "./MainBooksContainer";
import FloatingAddButton from "./FloatingAddButton";

const books = [
  {
    title: 1,
    thumbnail:
      "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: 2,
    thumbnail:
      "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1711556476/a/2f/20/158646-ml-2252022.jpg",
  },
  {
    title: 3,
    thumbnail:
      "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: 4,
    thumbnail:
      "https://m.media-amazon.com/images/I/81zeKRGCPpL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: 5,
    thumbnail:
      "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: 6,
    thumbnail:
      "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: 7,
    thumbnail:
      "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
  },
];

const LibraryScreen = () => {
  return (
    <>
      <MainBooksContainer page={"library"} books={books} isLoaded={true} />
      <FloatingAddButton />
    </>
  );
};

export default LibraryScreen;

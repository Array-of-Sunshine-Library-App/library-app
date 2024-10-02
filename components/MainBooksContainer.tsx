import React, { useState } from "react";
import { View, FlatList } from "react-native";
import BookCard from "./BookCard";
import FilterBar from "./FilterBar";

type MainBooksContainerProps = {
  location: string;
}

const MainBooksContainer = ({location}:MainBooksContainerProps) => {

  const [isLoaded, setIsLoaded] = useState(true);
  //const [books, setBooks] = useState<{ id: number; coverURL: string }[]>([]);

  const books = [
    {
      id: 1,
      coverURL:
        "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      coverURL:
        "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1711556476/a/2f/20/158646-ml-2252022.jpg",
    },
    {
      id: 3,
      coverURL:
        "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 4,
      coverURL:
        "https://m.media-amazon.com/images/I/81zeKRGCPpL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 5,
      coverURL:
        "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 6,
      coverURL:
        "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 7,
      coverURL:
        "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
    },
  ];
  
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
    <FlatList
      data={isLoaded ? books : Array(24).fill({})}
      renderItem={({ item, index }) => (
        <BookCard key={index} isLoaded={isLoaded} coverURL={item?.coverURL} location={location} />
      )}
      numColumns={4}
      ListHeaderComponent={<FilterBar />}
      />
      </View>
  );
};

export default MainBooksContainer;

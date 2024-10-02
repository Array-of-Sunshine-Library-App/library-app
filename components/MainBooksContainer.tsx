import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import BookCard from "./BookCard";
import FilterBar from "./FilterBar";

type MainBooksContainerProps = {
  books: any[];
  page: string;
  isLoaded: boolean;
};

const MainBooksContainer = ({
  page,
  books,
  isLoaded,
}: MainBooksContainerProps) => {
  //const [books, setBooks] = useState<{ id: number; coverURL: string }[]>([]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>This is the MainBookContainer!</Text>
      <FlatList
        data={isLoaded ? books : Array(24).fill({})}
        renderItem={({ item, index }) => (
          <BookCard
            key={index}
            isLoaded={isLoaded}
            thumbnail={item?.thumbnail}
            page={page}
          />
        )}
        numColumns={page === "explore" ? 3 : 4}
        ListHeaderComponent={<FilterBar />}
      />
    </View>
  );
};

export default MainBooksContainer;

import React, { useState } from "react";
import { FlatList } from "react-native";
import BookCard from "./BookCard";

const BookCardContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [books, setBooks] = useState<{ id: number; coverURL: string }[]>([]);

  setBooks([
    {
      id: 1,
      coverURL:
        "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
    },
    {
      id: 2,
      coverURL:
        "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
    },
    {
      id: 3,
      coverURL:
        "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
    },
    {
      id: 4,
      coverURL:
        "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
    },
    {
      id: 5,
      coverURL:
        "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
    },
  ]);

  return (
    <FlatList
      data={books}
      renderItem={({ item, index }) => (
        <BookCard key={index} isLoaded={isLoaded} coverURL={item?.coverURL} />
      )}
      numColumns={4}
    />
  );
};

export default BookCardContainer;

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ExploreSearchBar from "./ExploreSearchBar";
import MainBooksContainer from "./MainBooksContainer";
import axios from "axios";
import { API_KEY } from "@env";

const ExploreScreen = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}`
        );
        const mappedBooks = response.data.items.map((item: any) => ({
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          thumbnail: item.volumeInfo.imageLinks.thumbnail,
        }));

        setBooks(mappedBooks);

        setIsLoaded(true);
      } catch {
        setError("failed to fetch books!");
        setIsLoaded(true);
      }
    };

    fetchBooks();
  }, [searchQuery]);

  return (
    <View>
      <ExploreSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      {isLoaded ? <MainBooksContainer page={"explore"} books={books} isLoaded={isLoaded} /> : null }
    </View>
  );
};

export default ExploreScreen;

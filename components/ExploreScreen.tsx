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
        setIsLoaded(false);
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}&maxResults=40`
        );
        const mappedBooks = response.data.items
          .filter((item: any) => item.volumeInfo)
          .map((item: any) => ({
            bookId:
              item.volumeInfo.industryIdentifiers?.[0]?.identifier || "N/A",
            title: item.volumeInfo.title || "No Title",
            authors: item.volumeInfo.authors || ["Unknown Author"],
            description: item.volumeInfo.description || "No Description",
            publisher: item.volumeInfo.publisher || "Unknown Publisher",
            publishedDate: item.volumeInfo.publishedDate || "N/A",
            language: item.volumeInfo.language || "Unknown Language",
            pageCount: item.volumeInfo.pageCount || 0,
            categories: item.volumeInfo.categories || [],
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || null,
          }));
        setError(null);
        setBooks(mappedBooks);
        setIsLoaded(true);
      } catch {
        setError("failed to fetch books!");
        setIsLoaded(true);
      }
    };

    if (searchQuery) fetchBooks();
  }, [searchQuery]);

  return (
    <View>
      <ExploreSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={{ width: "100%", height: "100%" }}>
        {isLoaded ? (
          <MainBooksContainer
            page={"explore"}
            books={books}
            isLoaded={isLoaded}
          />
        ) : null}
      </View>
    </View>
  );
};

export default ExploreScreen;

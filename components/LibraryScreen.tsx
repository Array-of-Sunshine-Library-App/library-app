import React, { useContext, useEffect, useState } from "react";
import MainBooksContainer from "./MainBooksContainer";
import FloatingAddButton from "./FloatingAddButton";
import { UserContext } from "../contexts/UserContext";
import { BookAddContext } from "../contexts/BookAddContext";
import axios from "axios";

const LibraryScreen = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const { addBook } = useContext(BookAddContext);

  useEffect(() => {
    axios
      .get(
        `https://hosting-api-yiyu.onrender.com/api/users/${user.username}/books`
      )
      .then((response: any) => {
        setBooks(response.data);
        setIsLoaded(true);
      })
      .catch((err: any) => {
        setIsLoaded(true);
        setError("Failed to fetch books");
        console.log("error occured fetching library", err);
      });
  }, [user, addBook]);
  return (
    <>
      <MainBooksContainer page={"library"} books={books} isLoaded={true} />
      <FloatingAddButton />
    </>
  );
};

export default LibraryScreen;

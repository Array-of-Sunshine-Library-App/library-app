import React, { useContext, useEffect, useState } from "react";
import MainBooksContainer from "./MainBooksContainer";
import FloatingAddButton from "./FloatingAddButton";
import { UserContext } from "../contexts/UserContext";
import { getLibrary } from "../axiosRequests.ts";
import axios from "axios";

const LibraryScreen = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

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
  }, []);
  return (
    <>
      <MainBooksContainer page={"library"} books={books} isLoaded={true} />
      <FloatingAddButton />
    </>
  );
};

export default LibraryScreen;

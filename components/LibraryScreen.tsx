import React, { useContext, useEffect, useState } from "react";
import MainBooksContainer from "./MainBooksContainer";
import FloatingAddButton from "./FloatingAddButton";
import { UserContext } from "../contexts/UserContext";


// const books = [
//   {
//     title: "book 1",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "book 2",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1711556476/a/2f/20/158646-ml-2252022.jpg",
//   },
//   {
//     title: "book 3",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "book 4",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81zeKRGCPpL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "book 5",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "book 6",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "book 7",
//     authors: ["Jk"],
//     description: "It's a book mate",
//     thumbnail:
//       "https://m.media-amazon.com/images/I/81Budsu1XBL._AC_UF894,1000_QL80_.jpg",
//   },
// ];

const LibraryScreen = () => {
  const [books, setBooks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null)
  const {user} = useContext(UserContext)
  const username = "example123"
  useEffect(() => {
    const fetchBooks = async () => {
      try{
        const response = await axios.get(`  https://hosting-api-yiyu.onrender.com/api/users/${user.username}/books`)
       setBooks(response.data.items)
       setIsLoaded(true)
      }
      catch{
        setIsLoaded(true)
        setError("Fail to fetch books")

      }
    }
    fetchBooks()
  },[])
  return (
    <>
      <MainBooksContainer page={"library"} books={books} isLoaded={true} />
      <FloatingAddButton />
    </>
  );
};

export default LibraryScreen;

import React, { createContext, useState } from "react";

export const BookAddContext = createContext();

export const BookAddProvider = ({ children }) => {
  const [addBook, setAddBook] = useState([]);

  return (
    <BookAddContext.Provider value={{ addBook, setAddBook }}>
      {children}
    </BookAddContext.Provider>
  );
};

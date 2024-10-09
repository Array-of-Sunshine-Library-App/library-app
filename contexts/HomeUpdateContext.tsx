import React, { createContext, useState } from "react";

export const HomeUpdateContext = createContext();

export const HomeUpdateProvider = ({ children }: any) => {
  const [homeUpdate, setHomeUpdate] = useState();

  return (
    <HomeUpdateContext.Provider value={{ homeUpdate, setHomeUpdate }}>
      {children}
    </HomeUpdateContext.Provider>
  );
};

import React, { createContext, useState } from "react";

type User ={
    username : string;
    name : string;
}

export const UserContext = createContext();

export const UserProvider = ({ children } : any) => {
  const [user, setUser] = useState({ username: "example123", name: "Mr Example" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

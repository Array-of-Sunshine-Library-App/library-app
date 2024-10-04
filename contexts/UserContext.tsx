import React, { createContext, useState} from "react";

// type User{
//     username : string;
//     name : string;
//     readingStats{ 
//         booksRead : number;

//     }
// }

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({username : "example123"})
return <UserContext.Provider value={{user,setUser}}>
    {children}
</UserContext.Provider>
}


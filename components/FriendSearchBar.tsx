import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";

type user = {
  name: string;
  username: string;
};

// useEffect(() => {
//   axios
//     .get(
//       `https://hosting-api-yiyu.onrender.com/api/users/${user.username}/books`
//     )
//     .then((response: any) => {
//       setBooks(response.data);
//       // console.log(response.data);
//       setIsLoaded(true);
//     })
//     .catch((err: any) => {
//       setIsLoaded(true);
//       setError("Failed to fetch books");
//       console.log("error occured fetching library", err);
//     });
// }, []);

const FriendSearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    functions
      .getUser(searchBarValue)
      .then((response: any) => {
        if (response.data.username) {
          setUsers([response.data]);
          console.log("USERS?", response.data);
        } else {
          setError("This user does not exist");
        }
      })
      .catch((error) => {
        setError("Failed to fetch users");
      });
  };

  return (
    <View>
      <SearchBar
        style={styles.searchBar}
        placeholder="Add a friend by username"
        value={searchBarValue}
        onChangeText={setSearchBarValue}
        lightTheme={true}
        onSubmitEditing={handleSubmit}
      />
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <FriendCard key={index} friend={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          extraData={users}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    color: "black",
  },
});

export default FriendSearchBar;

// const devUsers = [
//   {
//     userID: 1,
//     name: "Martin Sutch",
//     readingStats: {
//       booksRead: 411,
//       totalPagesRead: 123308,
//       booksLent: 500,
//       numberBooksBorrowed: 0,
//     },
//   },
//   {
//     userID: 2,
//     name: "Nataliya Zinenko",
//     readingStats: {
//       booksRead: 511,
//       totalPagesRead: 212308,
//       booksLent: 0,
//       numberBooksBorrowed: 1,
//     },
//   },
// ];

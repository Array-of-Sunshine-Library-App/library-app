import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { SearchBar } from "@rneui/themed";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";

type user = {
  name: string;
  username: string;
};

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
        } else {
          setError("This user does not exist");
        }
      })
      .catch((error) => {
        setError("Failed to fetch users");
      });
  };

  const handleClear = () => {
    setUsers([]);
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
        onClear={handleClear}
      />
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          data={users}
          renderItem={({ item, index }) => (
            <FriendCard key={index} friend={item} page={"searchBar"} />
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

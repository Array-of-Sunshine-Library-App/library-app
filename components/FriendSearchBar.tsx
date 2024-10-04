import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from "@rneui/themed";
import FriendCard from './FriendCard';

const devUsers = [
    {
      userID: 1,
      name: "Martin Sutch",
            readingStats: {
                booksRead: 411,
                totalPagesRead: 123308
            }
    },
    {
        userID: 2,
        name: "Nataliya Zinenko",
              readingStats: {
                  booksRead: 511,
                  totalPagesRead: 212308
              }
      },
  ];

const FriendSearchBar = () => {
    const [searchBarValue, setSearchBarValue] = useState("");
    const [users, setUsers] = useState<any[]>([])

    const handleSubmit = () => {
        //api call to search users list
        setUsers(devUsers)
}

    return (
        <View>
            <SearchBar style={styles.searchBar} placeholder="Add a friend by username" value={searchBarValue} onChangeText={setSearchBarValue} lightTheme={true} onSubmitEditing={handleSubmit}/>
            <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <FriendCard key={index} friend={item} />
        )}
        numColumns={1}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
      color: "black"
    }
  });

export default FriendSearchBar
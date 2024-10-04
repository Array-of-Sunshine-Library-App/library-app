import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FriendCard from './FriendCard';

const devUsers = [
    {
      userID: 3,
      name: "Josh Martin",
            readingStats: {
                booksRead: 411,
                totalPagesRead: 123308
            }
    },
    {
        userID: 4,
        name: "Jackson",
              readingStats: {
                  booksRead: 511,
                  totalPagesRead: 212308
              }
      },
      {
        userID: 4,
        name: "Maria",
              readingStats: {
                  booksRead: 511,
                  totalPagesRead: 212308
              }
      },
  ];

const FriendRequests = () => {
    const [users, setUsers] = useState<any[]>([])

    return (
        <View>
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

export default FriendRequests
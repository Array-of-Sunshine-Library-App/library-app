import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const FriendRequests = ({ updated, setUpdated }: any) => {
  const { user } = useContext(UserContext);
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    functions.getFriendRequests(user.username).then((request: any) => {
      setFriendRequests(request.data);
      setIsLoading(false);
    });
  }, [updated, user]);

  if (isLoading) {
    return (
      <View>
        <Text style={styles.loading}>...Loading friend request</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <Text style={styles.title}>Friend Requests</Text>
      </View>
      {friendRequests.length === 0 && (
        <Text style={styles.text}>You have no new friend requests</Text>
      )}
      <FlatList
        data={friendRequests}
        renderItem={({ item, index }) => (
          <FriendCard
            key={index}
            friend={item}
            page={"friendRequest"}
            updated={updated}
            setUpdated={setUpdated}
          />
        )}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    color: "black",
  },
  title: {
    textAlign: "left",
    color: "black",
    paddingTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  text: {
    fontSize: 15,
    color: "gray",
    textAlign: "left",
    margin: 9,
  },
  loading: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});

export default FriendRequests;

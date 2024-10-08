import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendList = ({ updated, setUpdated }: any) => {
  const { user } = useContext(UserContext);
  const [friends, setFriends] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    functions.getFriends(user.username).then((request: any) => {
      setFriends(request.data);
      setIsLoading(false);
    });
  }, [updated, user]);
  if (isLoading) {
    return (
      <View>
        <Text style={styles.loading}>...Loading friends</Text>
      </View>
    );
  }
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={styles.title}>Your Friends</Text>
      {friends.length === 0 && <Text style={styles.text}>No friends</Text>}
      <FlatList
        data={friends}
        renderItem={({ item, index }) => (
          <FriendCard
            key={index}
            friend={item}
            page={"friend"}
            updated={updated}
            setUpdated={updated}
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
    fontSize: 16,
    textAlign: "left",
    color: "black",
    marginTop: 35,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "grey",
  },
  loading: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
  },
});

export default FriendList;

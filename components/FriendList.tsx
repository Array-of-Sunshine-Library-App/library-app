import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendList = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState<any[]>([]);
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    functions.getFriends(user.username).then((request: any) => {
      setUsers(request.data);
    });
  }, [users]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text>Your friends:</Text>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <FriendCard
            key={index}
            friend={item}
            page={"friend"}
            users={users}
            setUsers={setUsers}
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
});

export default FriendList;

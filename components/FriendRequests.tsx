import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendRequests = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    functions.getFriendRequests(user.username).then((request: any) => {
      setUsers(request.data);
    });
  }, [users]);

  return (
    <View>
      <View>
        <Text>Friend requests:</Text>
      </View>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <FriendCard
            key={index}
            friend={item}
            page={"friendRequest"}
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

export default FriendRequests;

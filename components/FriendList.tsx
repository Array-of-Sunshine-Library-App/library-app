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
  const [updated, setUpdated] = useState<number>(0);
  useEffect(() => {
    functions.getFriends(user.username).then((request: any) => {
      setUsers(request.data);
    });
  }, [updated]);

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
});

export default FriendList;

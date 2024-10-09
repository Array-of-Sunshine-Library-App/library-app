import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendList = () => {
  const { user } = useContext(UserContext);
  const [friends, setFriends] = useState<any[]>([]);
  const [isFriend, setIsFriend] = useState(false);
  const [updated, setUpdated] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    functions.getFriends(user.username).then((request: any) => {
      setFriends(request.data);
      setIsLoading(false)
    });
  },  [])//[updated]);
  if(isLoading){
    return (<View><Text style={styles.title}>...Loading friends</Text></View>)
  }
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={styles.title}>Your friends</Text>
      {friends.length===0 && <Text style={styles.text}>No friends</Text>}
      <FlatList
        data={friends}
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
  title: {
    fontSize : 30,
    textAlign : "center",
  },
  text : {
    fontSize : 18,
    color : "gray"
  }
});

export default FriendList;

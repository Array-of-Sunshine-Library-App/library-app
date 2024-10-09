import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendRequests = () => {
  const { user } = useContext(UserContext);
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [updated, setUpdated] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    functions.getFriendRequests(user.username).then((request: any) => {
      setFriendRequests(request.data);
      setIsLoading(false)
    });
  }, [])//[updated]);
  
  if(isLoading){
    return (<View><Text style={styles.title}>...Loading friend request</Text></View>)
  }

  return (
    <View>
      <View>
        <Text style={styles.title}>Friend requests</Text>
      </View>
      {friendRequests.length===0 && <Text style={styles.text}>No request</Text>}
      <FlatList
        data={friendRequests}
        renderItem={({ item, index }) => (
          <FriendCard
            key={index}
            friend={item}
            page={"friendRequest"}
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
    color: "gray"
  }
});

export default FriendRequests;

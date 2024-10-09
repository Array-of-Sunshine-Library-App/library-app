import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FriendCard from "./FriendCard";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

const FriendRequests = ({updated, setUpdated} : any) => {
  const { user } = useContext(UserContext);
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    console.log(updated, "updated-> rendering RF")
    setIsLoading(true)
    functions.getFriendRequests(user.username).then((request: any) => {
      setFriendRequests(request.data);
      setIsLoading(false)
    });
  }, [updated]);
  
  if(isLoading){
    return (<View><Text style={styles.loading}>...Loading friend request</Text></View>)
  }

  return (
    <View>
      <View>
        <Text style={styles.title}>Friend requests</Text>
      </View>
      {friendRequests.length===0 && <Text style={styles.text}>No requests</Text>}
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
    fontSize : 30,
    textAlign : "center",
  },
  text : {
    fontSize : 18,
    color: "gray"
  },
  loading : {
    fontSize : 18,
    color : "gray",
    textAlign : "center",
  }
});

export default FriendRequests;

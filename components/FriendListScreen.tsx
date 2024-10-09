
import React, { useState, useSyncExternalStore } from "react";
import { View } from "react-native";
import FriendSearchBar from "./FriendSearchBar";
import FriendRequests from "./FriendRequests";
import FriendList from "./FriendList";

const FriendListScreen = () => {
  const [updated, setUpdated] = useState<number>(0);
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  return (
    <View>
      <FriendSearchBar/>
      <View>
        
        <FriendRequests updated={updated} setUpdated={setUpdated}
        friendRequests={friendRequests} setFriendRequests={setFriendRequests}/>
        <FriendList updated={updated} setUpdated={setUpdated}/>
      </View>
    </View>
  );
};

export default FriendListScreen;

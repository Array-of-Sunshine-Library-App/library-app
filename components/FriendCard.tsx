import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import functions from "../axiosRequests";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const FriendCard = ({ friend, page, setUpdated }) => {
  const { user } = useContext(UserContext);
  const [isFriend, setIsFriend] = useState(false);
  const [isOutgoingFriendRequest, setIsOutgoingFriendRequest] = useState(false);
  const [isIncomingFriendRequest, setIsIncomingFriendRequest] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (page === "friend") {
      setIsFriend(true);
      setIsOutgoingFriendRequest(false);
      setIsIncomingFriendRequest(false);
    } else if (page === "friendRequest") {
      setIsFriend(false);
      setIsOutgoingFriendRequest(false);
      setIsIncomingFriendRequest(true);
    }
  }, [page]);

  const handleSendFriendRequest = () => {
    functions.postFriendRequest(friend.username, user).then(() => {
      setIsOutgoingFriendRequest(true);
    });
  };

  const handleRevokeFriendRequest = () => {
    functions.deleteFriendRequest(friend.username, user.username).then(() => {
      setIsOutgoingFriendRequest(false);
    });
  };

  const handleAcceptFriendRequest = () => {
    functions.acceptFriendRequest(user.username, friend).then(() => {
      setIsFriend(true);
      setIsIncomingFriendRequest(false);
      setUpdated(1);
    });
  };

  const handleDeclineFriendRequest = () => {
    functions.deleteFriendRequest(user.username, friend.username).then(() => {
      setIsIncomingFriendRequest(false);
      setUpdated(2);
    });
  };

  const handleDeleteFriend = () => {
    functions.deleteFriend(user.username, friend.username).then(() => {
      setIsFriend(false);
      setUpdated(3);
    });
  };

  return (
    <Pressable
      onPress={
        isFriend ? () => navigation.navigate("Friend page", { friend }) : null
      }
    >
      <View style={[styles.card]}>
        <View>
          <Text style={[styles.name]}>{friend.username}</Text>
          <Text> {friend.name} </Text>
        </View>
        {isFriend ? (
          <View style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleDeleteFriend}
            >
              <Image
                source={require("../assets/person-remove.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {!isFriend && !isOutgoingFriendRequest && !isIncomingFriendRequest ? (
          <View style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleSendFriendRequest}
            >
              <Image
                source={require("../assets/person-add.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {!isFriend && isOutgoingFriendRequest ? (
          <View style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleRevokeFriendRequest}
            >
              <Image
                source={require("../assets/person-remove.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]}>
              <Image
                source={require("../assets/person-add.png")}
                style={[styles.icon, { opacity: 0.5 }]}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {!isFriend && isIncomingFriendRequest ? (
          <View style={[styles.buttonContainer]}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleDeclineFriendRequest}
            >
              <Image
                source={require("../assets/person-remove.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleAcceptFriendRequest}
            >
              <Image
                source={require("../assets/person-add.png")}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    padding: 12,
    borderRadius: 5,
    backgroundColor: "white",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    padding: 8,
    marginLeft: 10,

    borderRadius: 8,
  },

  icon: {
    width: 24,
    height: 24,
  },

  buttonContainer: {
    flexDirection: "row",
  },
});

export default FriendCard;

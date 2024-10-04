import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const FriendCard = ({ friend }) => {
  const [isFriend, setIsFriend] = useState(false);
  const [isOutgoingFriendRequest, setIsOutgoingFriendRequest] = useState(false);
  const [isIncomingFriendRequest, setIsIncomingFriendRequest] = useState(true);

  const navigation = useNavigation();

  const handleSendFriendRequest = () => {
    setIsOutgoingFriendRequest(true);
  };

  const handleRevokeFriendRequest = () => {
    setIsOutgoingFriendRequest(false);
  };

  const handleAcceptFriendRequest = () => {
    setIsFriend(true);
    setIsIncomingFriendRequest(false);
  };

  const handleDeclineFriendRequest = () => {
    setIsIncomingFriendRequest(false);
  };

  const handleDeleteFriend = () => {
    setIsFriend(false);
  };

  return (
    <Pressable
      onPress={
        isFriend ? () => navigation.navigate("Friend page", { friend }) : null
      }
    >
      <View style={[styles.card]}>
        <View>
          <Text style={[styles.name]}>{friend.name}</Text>
          <Text>Has read {friend.readingStats.booksRead} books</Text>
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

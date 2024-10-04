import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FriendCard = ({ friend }) => {
  const navigation = useNavigation();

  return (
      <Pressable onPress={() => navigation.navigate("Friend page", {friend})}>
        {/* Add turnary in line above - If this person is not a friend of current user then do not allow navigation*/}
    <View style={[styles.card]}>
        <View>
            <Text>
                {friend.name}
            </Text>
        </View>
    </View>
        </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default FriendCard;

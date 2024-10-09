import { Text, View, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ProfileScreen = () => {
  const [isLogIn, setLogIn] = useState(true);
  const [inputUsername, setInputUsername] = useState("");
  const [isIncorrectUser, setIsIncorrectUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();

  const handlePressLogIn = () => {
    if (inputUsername.length > 0) {
      setIsEmptyInput(false);
      listUsers.forEach((userL: any) => {
        //console.log(userL.username, inputUsername);
        if (userL.username === inputUsername) {
          console.log("correct user, log in true");
          setLogIn(true);
          setUser(userL);
        }
      });
      if (!isLogIn) setIsIncorrectUser(true);
      setInputUsername("");
    } else {
      setIsIncorrectUser(false);
      setIsEmptyInput(true);
    }
  };
  const handlePressLogOut = () => {
    console.log("Log out");
    setLogIn(false);
  };
  const handlePressRegister = () => {
    setLogIn(false);
    navigation.navigate("New User");
  };
  useEffect(() => {
    axios
      .get(`https://hosting-api-yiyu.onrender.com/api/users/allusers`)
      .then((users: any) => {
        setListUsers(users.data);
        setIsLoading(false);
        return users;
      })
      .catch((err: any) => {
        console.log("Error getting users->", err);
        setError(err);
      });
  }, [user]);

  // if (isLoading) {
  //     return <View><Text>...Loading</Text></View>
  // }
  return (
    <View style={styles.section}>
      <Text style={styles.title}>User Profile</Text>
      {isLogIn && (
        <View style={styles.section}>
          <Text style={styles.text}>Username: {user.username}</Text>
          <Text style={styles.text}>Name: {user.name}</Text>
          <View style={styles.butsection}>
            <Button
              style={styles.button}
              title="Log Out"
              onPress={handlePressLogOut}
            />
            <Button
              style={styles.button}
              title="Register"
              onPress={handlePressRegister}
            />
          </View>
        </View>
      )}
      {!isLogIn && (
        <View style={styles.section}>
          <Text style={styles.text}> Enter username:</Text>
          <TextInput
            style={styles.inputText}
            placeholder="here..."
            value={inputUsername}
            onChangeText={(newUsername) => setInputUsername(newUsername)}
          />
          {isEmptyInput && (
            <Text style={styles.textError}>
              It is empty. Please enter username
            </Text>
          )}
          {isIncorrectUser && (
            <Text style={styles.textError}> User incorrect. Try again</Text>
          )}
          <View style={styles.butsection}>
            <Button
              style={styles.button}
              title="Log In"
              onPress={handlePressLogIn}
            />
            <Button
              style={styles.button}
              title="Register"
              onPress={handlePressRegister}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderColor: "black",
    margin: 5,
  },
  button: {
    width: 150,
    height: 90,
    margin: 10,
    padding: 5,
  },
  title: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    padding: 20,
  },
  text: {
    fontSize: 18,
    margin: 5,
    textAlign: "center",
  },
  textError: {
    fontSize: 16,
    margin: 5,
    color: "red",
  },
  inputText: {
    margin: 5,
    width: 300,
    height: 45,
    fontSize: 18,
    borderColor: "gray",
    borderWidth: 1,
  },
  butsection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
  },
});

export default ProfileScreen;

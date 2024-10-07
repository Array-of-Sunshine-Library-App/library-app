import { Text, View, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../contexts/UserContext";
import { Button } from "react-native-elements";
import { getAllUsers } from "../axiosRequest";
import axios from "axios";

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLogIn, setLogIn] = useState(true);
  const [inputUsername, setInputUsername] = useState("");
  const [isIncorrectUser, setIsIncorrectUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [error, setError] = useState(null);
  console.log(user.username);

  const handlePressLogIn = () => {
    console.log("chilling in log in", inputUsername, typeof inputUsername);
    if (inputUsername.length > 0) {
      setIsEmptyInput(false);
      listUsers.forEach((userL: any) => {
        //console.log(userL.username, inputUsername);
        if (userL.username === inputUsername) {
            console.log("correct user, log in true")
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
  function handlePressLogOut() {
    console.log("Log out");
    setLogIn(false);
  }
  function handlePressRegister() {
    console.log("Register");
    setLogIn(false);
  }
  useEffect(() => {
    axios
      .get(`https://hosting-api-yiyu.onrender.com/api/users/allusers`)
      .then((users: any) => {
        console.log(users.data);
        setListUsers(users.data);
        setIsLoading(false);
        return users;
      })
      .catch((err: any) => {
        console.log("Error getting users->", err);
      });
  }, [user]);

  // if (isLoading) {
  //     return <View><Text>...Loading</Text></View>
  // }
  return (
    <View>
      {isLogIn && (
        <View>
          <Text>{user.username}</Text>
          <Button title="Log Out" onPress={handlePressLogOut} />
          <Button title="Register" onPress={handlePressRegister} />
        </View>
      )}
      {!isLogIn && (
        <View>
          <Text> Enter username:</Text>
          <TextInput
            placeholder="here..."
            value={inputUsername}
            onChangeText={(newUsername) => setInputUsername(newUsername)}
          />
            {isEmptyInput && <Text> It is empty. Please enter username</Text>}
            {isIncorrectUser && <Text> User incorrect. Try again</Text>}
          <Button title="Log In" onPress={handlePressLogIn} />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;

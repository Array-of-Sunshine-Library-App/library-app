import { Text, View, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { UserContext } from "../contexts/UserContext";
import { Button } from "react-native-elements";
import { getAllUsers } from "../axiosRequest";
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
  const  handlePressLogOut = () => {
    console.log("Log out");
    setLogIn(false);
  }
  const  handlePressRegister = () => {
    console.log("Register");
    setLogIn(false);
    navigation.navigate("New User")
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
        setError(err)
      });
  }, [user]);

  // if (isLoading) {
  //     return <View><Text>...Loading</Text></View>
  // }
  return (
    <View style={styles.section}>
      <Text style={styles.title}>User Profile</Text>
      {isLogIn && (
        <View >
          <Text style={styles.text} >Username: {user.username}</Text>
          <Text style={styles.text} >Name: {user.name}</Text>
          <View style={styles.butsection}> <Button style={styles.button}  title="Log Out" onPress={handlePressLogOut} />
          <Button  style={styles.button}  title="Register" onPress={handlePressRegister} /> </View>
        </View>
      )}
      {!isLogIn && (
        <View>
          <Text style={styles.text} > Enter username:</Text>
          <TextInput style={styles.text} 
            placeholder="..."
            value={inputUsername}
            onChangeText={(newUsername) => setInputUsername(newUsername)}
          />
            {isEmptyInput && <Text  style={styles.textError}> It is empty. Please enter username</Text>}
            {isIncorrectUser && <Text  style={styles.textError}> User incorrect. Try again</Text>}
            <View style={styles.butsection}><Button style={styles.button} title="Log In" onPress={handlePressLogIn} />
          <Button style={styles.button}  title="Register" onPress={handlePressRegister} /> </View>
       </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding : 15,
    borderColor: 'black',
    borderRadius: 35 
  },
  button : {
    width : 200,
    height: 90,
    //backgroundColor: '#00aeef',
      borderColor: 'black',
      borderRadius: 35,
      margin: 10
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    fontFamily: 'Georgia', 
    fontStyle: 'italic'
  },
  text : {
    fontSize: 35,
    fontFamily: 'Georgia', 
    fontStyle: 'italic'
  },
  textError : {
    fontSize: 20
  },
  inputText : {
    borderColor: "black",
    borderRightColor: "black"
  },
  butsection : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});


export default ProfileScreen;

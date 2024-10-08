import React, { useContext, useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-native-elements";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const RegisterNewUser = () => {  
    
  const { user, setUser } = useContext(UserContext);
  const [inputName, setInputName] = useState("")
  const [inputSurname, setInputSurname] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  const [isEmptyField, setIsEmptyField] = useState(false)
  const [error, setError] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true)
  const [isRegistered, setIsRegistered] = useState(false)
  const navigation = useNavigation();



const validateUserData = ():boolean => {
  setIsValidForm(true)
  setIsRegistered(false)
  if(!inputName){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(!/^[A-Za-z\s]+$/g.test(inputName)){
    setIsValidForm(false)
    setInputName("")
  }
  if(!inputSurname){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(!/^[A-Za-z\s]+$/g.test(inputSurname)){
    setIsValidForm(false)
    setInputSurname("")
  }
  if(!inputUsername){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(!/^[A-Za-z0-9]+$/g.test(inputUsername)){
    setIsValidForm(false)
    setInputUsername("")
  }
  console.log(isValidForm,"<----is valid?")
  return isValidForm;
}



const handlePressRegistration = () => {

  
  if(validateUserData()){
    const newUser: { [key: string]: string } = {
      name: inputName + ' ' + inputSurname,
      username: inputUsername,
  
    };
    console.log(newUser)
      return axios.post(`https://hosting-api-yiyu.onrender.com/api/users/newuser`, newUser).
      then(() => {
        setUser(newUser)
        console.log( "insertValidNewData")
        setInputName("")
        setInputSurname("")
        setInputUsername("")
        setIsRegistered(true)
      })
      .catch((err) => {
        console.log("Error: posting new user:", err)
        setIsRegistered(false)
      })
  }
}
const handleBackRegistration = () => {
  navigation.navigate("Library")
}
  return (
    <View> <Text>New User Registration</Text>
      {!isRegistered &&
      <View>
      {isEmptyField && <Text>All fields are required. No empty inputs please</Text>}
      {!isValidForm && <Text>The input is invalid</Text>}
        <View><Text> Enter First Name:</Text>
          <TextInput
            placeholder="..."
            value={inputName}
            onChangeText={(newName) => setInputName(newName)}
          />
               <Text> Enter Surname:</Text>
          <TextInput
            placeholder="..."
            value={inputSurname}
            onChangeText={(newSurname)=> setInputSurname(newSurname)}
          />
          <Text> Enter Username:</Text>
          <TextInput
            placeholder="..."
            value={inputUsername}
            onChangeText={(newUsername) => setInputUsername(newUsername)}
          />
   
           <Button title="Register" onPress={handlePressRegistration} />
           </View>
           </View>}
           {isRegistered && <View> <Button title="Registration complete" onPress={handleBackRegistration} /></View>}  
    </View>
  );
};

export default RegisterNewUser;

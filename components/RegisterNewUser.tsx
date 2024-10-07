import React, { useContext, useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-native-elements";
import axios from "axios";

const RegisterNewUser = () => {  
    
  const { user, setUser } = useContext(UserContext);
  const [inputName, setInputName] = useState("")
  const [inputSurname, setInputSurname] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  const [isEmptyField, setIsEmptyField] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true)


const validateUserData = ():boolean => {
  if(!inputName){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(/^[A-Za-z\s]+$/g.test(inputName)){
    setIsValidForm(false)
  }
  if(!inputSurname){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(/^[A-Za-z\s]+$/g.test(inputSurname)){
    setIsValidForm(false)
  }
  if(!inputUsername){
    setIsEmptyField(true)
    setIsValidForm(false)
  }else if(/^[A-Za-z0-9]+$/g.test(inputUsername)){
    setIsValidForm(false)
  }
  return isValidForm;
}



const handlePressRegistration = () => {
  
  if(validateUserData()){

  }
}
  useEffect(() => {
    axios
      .get(
        `https://hosting-api-yiyu.onrender.com/api/users/${user.username}/books`
      )
      .then((response: any) => {
        // console.log(response.data);
        setIsLoaded(true);
      })
      .catch((err: any) => {
        setIsLoaded(true);

        console.log("Error Register New User", err);
      });
  }, []);
  return (
    <View> <Text>New User Registration</Text>
        <Text> Enter First Name:</Text>
          <TextInput
            placeholder="here..."
            value={inputName}
            onChangeText={(newName) => setInputName(newName)}
          />
               <Text> Enter Surname:</Text>
          <TextInput
            placeholder="here..."
            value={inputSurname}
            onChangeText={(newSurname)=> setInputSurname(newSurname)}
          />
          <Text> Enter Username:</Text>
          <TextInput
            placeholder="here..."
            value={inputUsername}
            onChangeText={(newUsername) => setInputUsername(newUsername)}
          />
           <Button title="Register" onPress={handlePressRegistration} />
    </View>
  );
};

export default RegisterNewUser;

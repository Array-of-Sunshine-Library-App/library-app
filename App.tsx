import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import ProfileScreen from "./components/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AppHeader from "./components/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainWithHeader}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainWithHeader() {
  return (
    <>
      <AppHeader />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

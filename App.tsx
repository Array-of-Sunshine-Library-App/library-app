import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </UserProvider>
  );
}

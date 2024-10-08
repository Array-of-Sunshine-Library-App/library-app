import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { BookAddProvider } from "./contexts/BookAddContext";

export default function App() {
  return (
    <UserProvider>
      <BookAddProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </BookAddProvider>
    </UserProvider>
  );
}

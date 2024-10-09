import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { BookAddProvider } from "./contexts/BookAddContext";
import { HomeUpdateProvider } from "./contexts/HomeUpdateContext";

export default function App() {
  return (
    <UserProvider>
      <BookAddProvider>
        <HomeUpdateProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </HomeUpdateProvider>
      </BookAddProvider>
    </UserProvider>
  );
}

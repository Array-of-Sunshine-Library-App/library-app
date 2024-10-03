import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ returnTo }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Pressable
          style={[styles.profilePressable, { opacity: returnTo ? 1 : 0 }]}
          pointerEvents={returnTo ? "auto" : "none"}
          onPress={() => navigation.navigate(returnTo)}
        >
          <Text style={styles.pressText}>Back</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Library App</Text>
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.pressText}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "orange",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePressable: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  pressText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AppHeader;

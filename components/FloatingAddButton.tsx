import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const FloatingAddButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.floatingButton}>
      <FAB
        icon={{ name: "add", color: "white" }}
        color="green"
        size="large"
        visible={true}
        style={styles.fabStyle}
        onPress={() => navigation.navigate("Explore")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 15,
  },

  fabStyle: {
    elevation: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
});

export default FloatingAddButton;

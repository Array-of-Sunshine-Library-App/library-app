import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";

const FilterBar = () => {
  return (
    <View style={styles.filterBar}>
      <SearchBar />
      <Pressable style={styles.filterPressable}>
        <Text style={styles.pressText}>Sort/Filter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  filterPressable: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  pressText: {
    color: "white",
    fontWeight: "bold",
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "beige",
  },
});

export default FilterBar;

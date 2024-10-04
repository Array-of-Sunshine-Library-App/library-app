import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const StatBlock = ({ friend }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Stats</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{friend.readingStats.booksRead}</Text>
          <Text style={styles.caption}>books read this year</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{friend.readingStats.totalPagesRead}</Text>
          <Text style={styles.caption}>pages read this year</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{friend.readingStats.booksLent}</Text>
          <Text style={styles.caption}>books lent to others</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.title}>
            {friend.readingStats.numberBooksBorrowed}
          </Text>
          <Text style={styles.caption}>books borrowed from others</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statsBox: {
    width: "50%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  caption: {
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default StatBlock;

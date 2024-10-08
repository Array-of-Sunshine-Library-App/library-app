import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StatBlock = ({ friend }: any) => {
  const booksOwned = Math.floor(Math.random() * 150);
  const booksWished = Math.floor(Math.random() * 50);
  const booksRead = Math.floor(Math.random() * 150);
  const pagesRead = booksRead * 297;
  const booksLent = Math.floor(Math.random() * 20);
  const booksBorrowed = Math.floor(Math.random() * 10);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Stats</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{booksOwned}</Text>
          <Text style={styles.caption}>books owned</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{booksWished}</Text>
          <Text style={styles.caption}>books wished for</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{booksRead}</Text>
          <Text style={styles.caption}>books read</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{pagesRead}</Text>
          <Text style={styles.caption}>pages read</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{booksLent}</Text>
          <Text style={styles.caption}>books lent to others</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.title}>{booksBorrowed}</Text>
          <Text style={styles.caption}>books borrowed from others</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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

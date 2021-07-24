import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ goalTitle } = props) => {
  return (
    <View style={styles.listItem}>
      <Text>{goalTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;

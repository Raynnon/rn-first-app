import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ id, goalTitle, onDelete } = props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{goalTitle}</Text>
      </View>
    </TouchableOpacity>
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

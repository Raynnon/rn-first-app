import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = ({ onAddGoal } = props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;

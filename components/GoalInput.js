import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Text,
  Pressable,
} from "react-native";

const GoalInput = ({ onAddGoal, modalVisibility, onCancelEdition } = props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={modalVisibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttons}>
          <Pressable
            style={styles.goalButtons}
            android_ripple={{ color: "#B20000" }}
            onPress={onCancelEdition}
          >
            <Text style={styles.buttonTxt}>CANCEL</Text>
          </Pressable>
          <Pressable
            style={[styles.goalButtons, { backgroundColor: "#2196F3" }]}
            android_ripple={{ color: "#1769AA" }}
            onPress={() => {
              onAddGoal(enteredGoal);
              setEnteredGoal("");
            }}
          >
            <Text style={styles.buttonTxt}>ADD</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  goalButtons: {
    height: 40,
    width: 80,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    elevation: 3,
  },
  buttonTxt: {
    color: "#fff",
  },
});

export default GoalInput;

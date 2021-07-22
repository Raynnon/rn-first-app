import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            borderBottomColor: "black",
            borderWidth: 1,
            padding: 10,
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

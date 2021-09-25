// Inputs.
import React from 'react';
import { StyleSheet, TextInput } from "react-native";

// Importing necessary data.
import sizes from '../config/sizes'


function FormInput({ placeholder, autoFocus, secureTextEntry }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f0f0f0",
    fontSize: 25,
    borderRadius: 30,
    color: "black",
    padding: 10,
    paddingLeft: 20,
    width: sizes.FormInputWidth,
    marginBottom: 15,
  },
});

export default FormInput;

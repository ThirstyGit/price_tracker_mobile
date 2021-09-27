// Inputs.
import React from 'react';
import { StyleSheet, TextInput } from "react-native";

// Importing necessary data.
import sizes from '../config/sizes';
import colors from '../config/colors';


function FormInput({ placeholder, autoFocus, secureTextEntry, onChangeText }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.whitePrimary,
    fontSize: 20,
    borderRadius: 30,
    color: "black",
    padding: 10,
    paddingLeft: 20,
    width: sizes.FormInputWidth,
    marginBottom: 15,
  },
});

export default FormInput;

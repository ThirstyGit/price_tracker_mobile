// Importis
import React from 'react';
import { StyleSheet, Pressable, Text } from "react-native";

// Importing necessary datas.
import colors from "../config/colors";
import sizes from "../config/sizes";

function CustomButton({ children }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{ children }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 30,
    width: sizes.FormInputWidth,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
});

export default CustomButton;

// Importis
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

// Importing necessary datas.
import colors from "../config/colors";
import sizes from "../config/sizes";

function CustomButton({ children }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 30,
    width: sizes.FormInputWidth,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 30,
  },
});

export default CustomButton;

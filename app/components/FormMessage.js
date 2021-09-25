// Imports
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Importing necessary datas.
import colors from "../config/colors";
import sizes from "../config/sizes";

function FormMessage({ children, visible, style }) {
  if(visible) {
    visible = styles.visible;
  }
  else {
    visible = styles.invisible;
  }
  return (
    <Text style={{ ...styles.message, ...style, ...visible }}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  message: {
    color: colors.redPrimary,
    fontSize: 20,
    width: sizes.FormInputWidth,
    backgroundColor: colors.redBackground,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.redPrimary,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  visible: {
    display: "flex",
  },
  invisible: {
    display: "none",
  }
})

export default FormMessage;

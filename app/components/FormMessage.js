// Imports
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Importing necessary datas.
import colors from "../config/colors";
import sizes from "../config/sizes";

function FormMessage({ visible, style, message, type }) {
  if(message) {
    visible = styles.visible;
  }
  else {
    visible = styles.invisible;
  }
  if(type == 'warning') {
    type = styles.warning;
  }
  else {
    type = {}
  }
  return (
    <Text style={{ ...styles.message, ...style, ...visible, ...type }}>{message}</Text>
  );
}

const styles = StyleSheet.create({
  message: {
    color: colors.greenPrimary,
    fontSize: 20,
    width: sizes.FormInputWidth,
    backgroundColor: colors.greenBackground,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.greenPrimary,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    overflow: "hidden",
  },
  warning: {
    color: colors.redPrimary,
    backgroundColor: colors.redBackground,
    borderColor: colors.redPrimary,
  },
  visible: {
    display: "flex",
  },
  invisible: {
    display: "none",
  },
});

export default FormMessage;

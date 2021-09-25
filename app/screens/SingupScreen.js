import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing user components.
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

// Importing necessary datas.
import colors from "../config/colors";

function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN IN</Text>
      <FormInput placeholder="Email" autoFocus={true}/>
      <FormInput placeholder="Password" secureTextEntry={true} />
      <CustomButton>Sign Up</CustomButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  legend: {
    fontSize: 30,
    marginBottom: 30,
    color: colors.primary,
  },
});

export default SignupScreen;

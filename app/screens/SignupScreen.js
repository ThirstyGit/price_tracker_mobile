import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing user components.
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import CustomRevertButton from '../components/CustomRevertButton';
import FormMessage from '../components/FormMessage';

// Importing necessary datas.
import colors from "../config/colors";

function SignupScreen() {
  // Setting up state.
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  // Functions for form state management.
  function emailState(email) {
    setEmail(email);
  }

  function usernameState(username) {
    setUsername(username);
  }

  function passwordState(password) {
    setPassword(password);
  }

  function confirmPasswordState(confirmPassword) {
    setConfirmPassword(confirmPassword);
  }

  // functions.
  function signup() {
    console.log(username, email, password, confirmPassword);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN UP</Text>
      <FormMessage style={styles.messageMargin}>
        Error Message Goes Here.
      </FormMessage>
      <FormInput
        placeholder="Username"
        autoFocus={true}
        onChangeText={usernameState}
      />
      <FormInput placeholder="Email" onChangeText={emailState} />
      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={passwordState}
      />
      <FormInput
        placeholder="New Password"
        secureTextEntry={true}
        onChangeText={confirmPasswordState}
      />
      <CustomButton onPress={signup}>Sign Up</CustomButton>
      <CustomRevertButton>Sign In</CustomRevertButton>
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
  messageMargin: {
    marginBottom: 15,
  }
});

export default SignupScreen;

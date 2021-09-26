import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing redux actions.
import { login, logout } from '../store/actions';

// Importing user components.
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import CustomRevertButton from "../components/CustomRevertButton";
import FormMessage from "../components/FormMessage";

// Importing necessary datas.
import colors from "../config/colors";

function SigninScreen() {
  // Setting up state.
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // Functions for form state management.
  function emailState(email) {
    setEmail(email);
  }

  function passwordState(password) {
    setPassword(password);
  }

  // redux.
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const reduxFunctions = bindActionCreators({ login, logout }, dispatch);

  // functions.
  function signin() {
    console.log(email, password);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN IN</Text>
      <FormMessage style={styles.messageMargin}>
        Wrong Email or Password.
      </FormMessage>
      <FormInput
        placeholder="Email"
        autoFocus={true}
        onChangeText={emailState}
      />
      <FormInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={passwordState}
      />
      <CustomButton onPress={signin}>Sign In</CustomButton>
      <CustomRevertButton>Sign Up</CustomRevertButton>
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
  },
});

export default SigninScreen;

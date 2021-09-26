import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
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
  let [message, setMessage] = useState("");
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
  const dispatch = useDispatch();
  const reduxFunctions = bindActionCreators({ login, logout }, dispatch);

  // functions.
  function signin() {
    // Validation form.
    if (!email.length) {
      setMessage("Please give an email");
    }
    else if (!password.length) {
      setMessage("Please give a password");
    }
    else {
      // If the data is correct, send it.
      setMessage("");
      fetch("https://sadlab.herokuapp.com/auth/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "*/*",
        },
      })
      .then(res => {
        if(!res.url.includes('login')) {
          console.log('Logged In');
          reduxFunctions.login("logged in");
        }
        else {
          setMessage("Email or Password Invalid.");
        }
      })
      .catch(err => {
        setMessage("There was an erro.");
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN IN</Text>
      <FormMessage style={styles.messageMargin} message={message}></FormMessage>
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

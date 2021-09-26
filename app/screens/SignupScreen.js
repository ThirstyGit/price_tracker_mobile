import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing user components.
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import FormMessage from '../components/FormMessage';

// Importing necessary datas.
import colors from "../config/colors";

function SignupScreen() {
  // Setting up state.
  let [message, setMessage] = useState("");
  let [type, setType] = useState("warning");
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
    // Validation form.
    if (username.length < 4) {
      setMessage("Username is too short!");
    }
    else if (!email.match(/(^.+@.+\.com$)/)) {
      setMessage("Please give a valid email.");
    }
    else if (
      !password.match(/(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(.{8})/)
    )
    {
      setMessage(
        "Password must be minimum length 8 and contain smaller case, lower case, numbers."
      );
    }
    else if (password != confirmPassword) {
      setMessage("Passwords don't match");
    }
    else {
      // If the data is correct, send it.
      fetch("https://sadlab.herokuapp.com/auth/register", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name: username,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "*/*",
        },
      })
        .then((res) => {
          setType('warning');
          if (res.url.includes("login")) {
            setType('');
            setMessage("Account Created!");
          }
          else {
            setMessage("Account Already exists!");
          }
        })
        .catch((err) => {
          setMessage("There was an error.");
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN UP</Text>
      <FormMessage
        style={styles.messageMargin}
        type={type}
        message={message}
      ></FormMessage>
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

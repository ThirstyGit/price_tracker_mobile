import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Importing user components.
import FormInput from "../components/FormInput";
import CustomButton from "../components/CustomButton";
import CustomRevertButton from "../components/CustomRevertButton";
import FormMessage from "../components/FormMessage";

// Importing necessary datas.
import colors from "../config/colors";

function SigninScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN IN</Text>
      <FormMessage style={styles.messageMargin}>
        Wrong Email or Password.
      </FormMessage>
      <FormInput placeholder="Email" autoFocus={true} />
      <FormInput placeholder="Password" secureTextEntry={true} />
      <CustomButton>Sign In</CustomButton>
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

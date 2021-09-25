import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

function buttonEvent() {
  console.log('Clicked!');
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.legend}>SIGN IN</Text>
      <TextInput style={styles.textInput} placeholder="Email"/>
      <TextInput style={styles.textInput} placeholder="Password"/>
      <Pressable style={styles.button} onPress={buttonEvent}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const FormInputWidth = "80%";

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
    color: "hsl(174, 100%, 29%)",
  },
  button: {
    backgroundColor: "hsl(174, 100%, 29%)",
    padding: 5,
    borderRadius: 30,
    width: FormInputWidth,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    fontSize: 25,
    borderRadius: 30,
    color: "black",
    padding: 10,
    paddingLeft: 20,
    width: FormInputWidth,
    marginBottom: 15,
  },
});

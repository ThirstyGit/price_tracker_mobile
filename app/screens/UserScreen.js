// Imports
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

// importing user defined components.
import Screen from "../components/Screen";

// Importing redux actions.
import { login, logout } from '../store/actions';

function UserScreen() {
  // States.
  let [name, setName] = useState("LOADING...");
  let [email, setEmail] = useState("LOADING...");
  let [password, setPassword] = useState("**********");
  let [type, setType] = useState("LOADING...");

  // redux.
  const dispatch = useDispatch();
  const reduxFunctions = bindActionCreators({ login, logout }, dispatch);

  // Getting users information at start.
  useEffect(() => {
    fetch("https://englab.herokuapp.com/api/userinfo")
      .then((res) => res.json())
      .then((data) => {
        setName(data.user.name);
        setEmail(data.user.email);
        setType(data.user.type);
      });
  }, []);

  // Functions
  function singout() {
    reduxFunctions.logout();
  }

  return (
    <Screen>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.text}>{email}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{password}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>{type}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.info} onPress={singout}>
          <Text style={styles.warning}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    fontSize: 20,
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderBottomColor: "hsl(0, 0%, 71%)",
    borderBottomWidth: 1,
  },
  warning: {
    color: "hsl(4, 90%, 58%)",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default UserScreen;

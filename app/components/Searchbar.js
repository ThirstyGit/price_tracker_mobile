// Inputs.
import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Importing necessary data.
import sizes from "../config/sizes";
import colors from "../config/colors";

// This needs to make sure it is not redeclared when state changes.
let timeoutId;

function Searchbar({ placeholder, autoFocus, url, query, setState }) {
  // Necessary variable.
  // States.
  let [searchText, setSearchText] = useState("");
  // Functions.
  function search(searchbarText) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fetch(`${url}?${query}=${searchbarText}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
    }, 300);
    setSearchText(searchbarText);
  }

  function clearText() {
    setSearchText('');
  }

  return (
    <View style={styles.searchbarContainer}>
      <TextInput
        style={styles.searchbar}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChangeText={search}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.searchbarCrossContainer}
        onPress={clearText}
      >
        <Entypo
          name="cross"
          size={24}
          color="black"
          style={styles.searchbarCross}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchbarContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  searchbar: {
    backgroundColor: "white",
    fontSize: 20,
    borderRadius: 30,
    color: "black",
    width: "95%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 35,
    borderColor: "#aaaaaa",
    borderWidth: 1,
  },
  searchbarCrossContainer: {
    position: "absolute",
    right: 40,
  },
  searchbarCross: {
    fontSize: 30,
    color: colors.redBackground,
  },
});

export default Searchbar;

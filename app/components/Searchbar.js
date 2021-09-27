// Inputs.
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Importing necessary data.
import sizes from "../config/sizes";
import colors from "../config/colors";

function Searchbar({ placeholder, autoFocus, url, query, setState }) {
  let timeoutId;
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
    }, 1000);
  }

  return (
    <View style={styles.searchbarContainer}>
      <TextInput
        style={styles.searchbar}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChangeText={search}
      />
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
    borderColor: "#aaaaaa",
    borderWidth: 1,
  },
});

export default Searchbar;

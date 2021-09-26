// Imports
import React from "react";
import { Text, Button } from "react-native";

// importing user defined components.
import Screen from "../components/Screen";

function ProductScreen({ navigation }) {
  return (
    <Screen>
      <Text>This is the page for a single products.</Text>
      <Button
        title="Show Product"
        onPress={() => navigation.navigate("Product Screen")}
      ></Button>
    </Screen>
  );
}

export default ProductScreen;

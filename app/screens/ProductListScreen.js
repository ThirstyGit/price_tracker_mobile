// Imports
import React from "react";
import { Text, Button } from "react-native";

// importing user defined components.
import Screen from '../components/Screen';


function ProductListScreen({ navigation }) {
  return (
    <Screen>
      <Text>This is the page for list of products.</Text>
      <Button
        title="Show Product"
        onPress={() => navigation.navigate("Product Screen")}
      ></Button>
    </Screen>
  );
}

export default ProductListScreen;

// Imports
import React from "react";

// importing user defined components.
import Card from '../components/Card';
import Screen from "../components/Screen";

const tempSource =
  "https://images.unsplash.com/photo-1631123327880-9460e1a5968b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjY2OTcyMw&ixlib=rb-1.2.1&q=80&w=500";

function ProductScreen() {
  return (
    <Screen>
      <Card imgSrc={tempSource} name="Witcher 3: Wild Hunt" price="$60.00"></Card>
    </Screen>
  );
}

export default ProductScreen;

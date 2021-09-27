// Imports
import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native';

// importing user defined components.
import Card from '../components/Card';
import Screen from "../components/Screen";
import Searchbar from "../components/Searchbar";

const tempSource =
  "https://images.unsplash.com/photo-1631123327880-9460e1a5968b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjY2OTcyMw&ixlib=rb-1.2.1&q=80&w=500";



function ProductListScreen({ navigation }) {
  // Setting states.
  let [products, setProducts] = useState("");

  useEffect(() => {
    fetch("https://englab.herokuapp.com/api/allproducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Screen>
      <Searchbar
        placeholder="Search..."
        url="https://englab.herokuapp.com/search"
        query="name"
        setState={setProducts}
      />
      <FlatList
        data={products}
        keyExtractor={(product) => product._id.toString()}
        renderItem={({ item }) => (
          <Card
            imgSrc={item.image}
            name={item.name}
            price={item.price_history[item.price_history.length - 1].price}
            onPress={() => navigation.navigate("Product Screen", item)}
          />
        )}
      />
    </Screen>
  );
}

export default ProductListScreen;

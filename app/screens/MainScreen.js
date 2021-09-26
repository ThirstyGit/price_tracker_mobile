// imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

// importing users screens.
import ProductScreen from './ProductScreen';
import ProductListScreen from './ProductListScreen';

// Our navigator.
const Stack = createStackNavigator();
const ProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product List Screen" component={ProductListScreen} />
      <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default function MainScreen() {
  return (
    <NavigationContainer>
      <ProductNavigator />
    </NavigationContainer>
  );
}

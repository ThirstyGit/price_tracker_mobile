// imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

// importing users screens.
import UserScreen from './UserScreen';
import ProductScreen from './ProductScreen';
import ProductListScreen from './ProductListScreen';

// Importing necessary data.
import colors from '../config/colors';

// Our navigator.
// Tab Navigator implementation.
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductListScreen}/>
      <Tab.Screen name="User" component={UserScreen}/>
    </Tab.Navigator>
  );
}

// Stack Navigator implementation.
const Stack = createStackNavigator();
const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.whitePrimary,
      }}
      >
      <Stack.Screen name="Product List Screen" component={ProductListScreen} />
      <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default function MainScreen() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

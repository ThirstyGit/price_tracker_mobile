// imports
import React from 'react';
import { useSelector } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

// importing users screens.
import UserScreen from './UserScreen';
import ProductScreen from './ProductScreen';
import ProductListScreen from './ProductListScreen';
import SigninScreen from './SigninScreen';

// Importing necessary data.
import colors from '../config/colors';

// Our navigator.
// Tab Navigator implementation.
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.whitePrimary,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Products"
        component={ProductNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-basket" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={30} color={color} />
          ),
        }}
      />
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
  // Redux
  const auth = useSelector((state) => state.auth);
  
  return auth.token ? (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  ) : (
    <SigninScreen />
  );
}

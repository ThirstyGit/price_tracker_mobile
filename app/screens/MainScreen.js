// imports
import React from 'react';
import { useSelector } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";

// importing users screens.
import UserScreen from './UserScreen';
import ProductScreen from './ProductScreen';
import ProductListScreen from './ProductListScreen';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';

// Importing necessary data.
import colors from '../config/colors';

// Our navigator.
// Tab Navigation.
const Tab = createBottomTabNavigator();
// Tab Navigator implementation for products.
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
            <FontAwesome name="shopping-basket" size={30} color={color} />
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
// Tab Navigator implementation for Auth.
const UserNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerShown: false,
        headerTintColor: colors.whitePrimary,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Sign In"
        component={SigninScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="key" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="plus" size={30} color={color} />
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
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  );
}

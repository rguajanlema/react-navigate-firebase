import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function myStack() {
  return (
    <Stack.container>
      <Stack.Screen />
    </Stack.container>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <myStack />
    </NavigationContainer>
  );
}

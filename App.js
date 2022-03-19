import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import UserList from "./screens/UserList";
import CreateuserScreen from "./screens/CreateuserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="userlist" component={UserList} />
      <Stack.Screen name="createuserscreen" component={CreateuserScreen} />
      <Stack.Screen name="userdetailscreen" component={UserDetailScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

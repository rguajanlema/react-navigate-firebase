import React from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateuserScreen = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.inputGroup}>
        <TextInput placeholder="Name User" />
      </View>
      <View style={style.inputGroup}>
        <TextInput placeholder="Email User" />
      </View>
      <View style={style.inputGroup}>
        <TextInput placeholder="Phone User" />
      </View>
      <View>
        <Button title="Save User" />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
export default CreateuserScreen;

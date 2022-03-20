import React, { useState } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateuserScreen = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangetext = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChangetext("name", value)}
        />
      </View>
      <View style={style.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangetext("email", value)}
        />
      </View>
      <View style={style.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangetext("phone", value)}
        />
      </View>
      <View>
        <Button title="Save User" onPress={() => console.log(state)} />
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

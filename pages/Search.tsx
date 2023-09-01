import React, { Dispatch } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface ISearch {
  setCity: Dispatch<React.SetStateAction<string>>;
  getWeather: () => void;
  navigation: any;
}

const Search: React.FC<ISearch> = ({ setCity, getWeather, navigation }) => {
  const onPressHandler = () => {
    getWeather();
    navigation.navigate("Result");
    setCity("");
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.textInput}
        placeholder="Search a city"
        onChangeText={setCity}
      />
      <Button title="Search" onPress={onPressHandler} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#7a1818a2",
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    width: 200,
    marginTop: 24,
  },
});

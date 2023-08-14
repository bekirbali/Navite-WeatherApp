import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface ISearch {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: () => void;
}

const Search: React.FC<ISearch> = ({ setCity, getWeather }) => {
  const onPressHandler = () => {
    getWeather();
    setCity("");
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.textInput}
        placeholder="Search a city"
        onChangeText={setCity}
      />
      <Button title="test" onPress={onPressHandler} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#7a1818a2",
    alignItems: "center",
    // justifyContent: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    width: 200,
    marginTop: 24,
  },
});

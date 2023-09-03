import React, { Dispatch } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface ISearch {
  setCity: Dispatch<React.SetStateAction<string>>;
  getWeather: () => void;
  navigation: any;
  city: string;
}

const Search: React.FC<ISearch> = ({
  setCity,
  getWeather,
  navigation,
  city,
}) => {
  const onPressHandler = () => {
    if (!city) return;
    getWeather();
    navigation.navigate("Result");
    setCity("");
  };

  const backGroundImage = {
    uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  };

  return (
    <ImageBackground
      source={backGroundImage}
      style={styles.background}
      blurRadius={100}
    >
      <View style={styles.search}>
        <TextInput
          style={styles.textInput}
          placeholder="Search a city"
          onChangeText={setCity}
          placeholderTextColor={"white"}
        />
        <Button title="Search" onPress={onPressHandler} />
      </View>
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#ffffffa2",
    width: 200,
    marginTop: 24,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  background: {
    flex: 1,
    width: "100%",
  },
});

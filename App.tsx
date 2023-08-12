import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Forecast } from "./models";
// import { API_KEY } from "@env";

export default function App() {
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);
  const [city, setCity] = useState<string>("paris");
  // const [loading, setLoading] = useState<boolean>(false);
  const apiKey = process.env.API_KEY;
  const URL_Weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const getWeather = async () => {
    await fetch(URL_Weather)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);

        return console.log(weatherData);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search a city" onChangeText={setCity} />
      <Button title="test" onPress={() => getWeather()} />
      <Text>{weatherData?.name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

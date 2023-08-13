import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Forecast } from "./models";
import Search from "./components/Search";
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

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search setCity={setCity} getWeather={getWeather} />
      </View>
      <View style={styles.data}>
        <Text>{weatherData?.weather[0].description}</Text>
        <Text>{weatherData?.name}</Text>
        <Text>{weatherData?.sys.country}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingBottom: 50,
  },
  search: {
    flex: 1,
  },
  data: {
    flex: 1,
    height: 300,
    width: 400,
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});

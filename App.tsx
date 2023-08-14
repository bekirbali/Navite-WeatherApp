import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
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

  const image = {
    uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.search}>
          <Search setCity={setCity} getWeather={getWeather} />
        </View>
        <View style={styles.data}>
          <Text style={styles.text}>{weatherData?.weather[0].description}</Text>
          <Text style={styles.text}>{weatherData?.name}</Text>
          <Text style={styles.text}>{weatherData?.sys.country}</Text>
        </View>
        <Image
          style={styles.imgTest}
          source={require("./assets/river.jpg")}
        ></Image>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingBottom: 50,
    // backgroundColor: "#fff",
  },
  search: {
    flex: 1,
  },
  data: {
    color: "white",
    flex: 1,
    height: 300,
    width: 400,
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    color: "white",
  },
  imgTest: {
    width: 200,
    height: 100,
  },
});

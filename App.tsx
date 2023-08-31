import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Forecast } from "./models";
import Search from "./pages/Search";
import Result from "./components/Result";
import { SvgUri } from "react-native-svg";
import Home from "./pages/Home";

export default function App() {
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);
  const [city, setCity] = useState<string>("paris");
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

  const backGroundImage = {
    uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ImageBackground source={backGroundImage} style={styles.image}>
      <View style={styles.container}>
        <Home />
        {/* <View>
          <SvgUri width="100px" height="100px" uri="./assets/50n.svg" />
        </View> */}
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
    justifyContent: "flex-end",
    padding: 16,
    paddingBottom: 50,
  },
  search: {
    flex: 1,
  },
  data: {
    flex: 1,
  },
  text: {
    color: "gray",
  },
});

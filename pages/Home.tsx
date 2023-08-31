import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Result from "../components/Result";
import { Forecast } from "../models";
import Search from "./Search";

const Home: React.FC = () => {
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
    <View>
      <View>
        <Search setCity={setCity} getWeather={getWeather} />
      </View>
      <View style={styles.data}>
        <Result weatherData={weatherData} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  data: {
    flex: 1,
  },
});

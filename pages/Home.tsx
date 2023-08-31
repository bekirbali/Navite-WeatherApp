import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Result from "./Result";
import { Forecast } from "../models";
import Search from "./Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = () => {
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

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Welcome" }}
        />
        {/* <View style={styles.search}>
          <Search setCity={setCity} getWeather={getWeather} />
        </View> */}
      </Stack.Navigator>
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
  search: {
    flex: 1,
  },
});

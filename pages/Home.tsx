import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Result from "./Result";
import { Forecast } from "../models";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = () => {
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);
  const [city, setCity] = useState<string>("paris");
  const apiKey = process.env.API_KEY;
  const URL_Weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Result"
          options={{
            title: `${weatherData ? weatherData?.name : "loading..."}`,
            headerShown: false,
          }}
        >
          {(props) => <Result {...props} weatherData={weatherData} />}
        </Stack.Screen>
        <Stack.Screen name="Search">
          {(props) => (
            <Search {...props} setCity={setCity} getWeather={getWeather} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;

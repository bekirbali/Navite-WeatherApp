import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Text, ImageBackground } from "react-native";
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
            headerStyle: { backgroundColor: "red" },
            headerShadowVisible: false,
            headerTitleAlign: "center",
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
      {/* <View style={styles.search}>
            <Search setCity={setCity} getWeather={getWeather} />
          </View> */}

      {/* <View style={styles.data}>
          <Result weatherData={weatherData} />
        </View> */}
    </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "blue",
  },
});

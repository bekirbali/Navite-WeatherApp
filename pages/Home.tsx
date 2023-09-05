import React, { useEffect, useState } from "react";
import Result from "./Result";
import { Forecast } from "../models";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const Home = () => {
  const [weatherData, setWeatherData] = useState<Forecast | null>(null);
  const [city, setCity] = useState<string>("paris");
  const [loading, setLoading] = useState<boolean>(true);
  const apiKey = process.env.API_KEY;
  const URL_Weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeather = async () => {
    try {
      await fetch(URL_Weather)
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShadowVisible: false,
              headerTransparent: true,
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
            <Stack.Screen
              name="Search"
              options={{
                headerTintColor: "white",
                headerTitle: "",
              }}
            >
              {(props) => (
                <Search
                  {...props}
                  setCity={setCity}
                  getWeather={getWeather}
                  city={city}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Home;

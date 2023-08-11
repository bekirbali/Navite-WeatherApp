import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// import { API_KEY } from "@env";

interface TaskData {
  id: number;
  task: string;
  isDone: boolean;
}

export default function App() {
  const [fetchedData, setFetchedData] = useState<TaskData[]>([]);
  const [fetchWeather, setFetchWeather] = useState<any>({});
  const [city, setCity] = useState<string>("istanbul");
  const apiKey = process.env.API_KEY;
  const URL_Weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const URL = `https://645a917b65bd868e931ed42c.mockapi.io/todos`;
  const getData = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setFetchedData(data);
      });
  };

  const getWeather = async () => {
    await fetch(URL_Weather)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setFetchWeather(data);
      });
  };

  useEffect(() => {
    // getData();
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search a city" onChangeText={setCity} />
      <Button title="test" onPress={() => console.log(apiKey)} />
      <Text>{fetchedData.map((item) => item.task)}</Text>
      <Text>{fetchWeather?.weather[0].description}</Text>
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

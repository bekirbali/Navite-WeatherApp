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
  const [city, setCity] = useState<string>("istanbul");
  const apiKey = process.env.API_KEY;
  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const URL = `https://645a917b65bd868e931ed42c.mockapi.io/todos`;
  const getData = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setFetchedData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search a city" onChangeText={setCity} />
      <Button title="test" onPress={() => console.log(apiKey)} />
      <Text>{fetchedData.map((item) => item.task)}</Text>
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

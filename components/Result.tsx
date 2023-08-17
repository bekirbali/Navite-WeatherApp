import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Forecast } from "../models";

interface IResult {
  weatherData: Forecast | null;
}

const Result: React.FC<IResult> = ({ weatherData }) => {
  return (
    <View style={styles.result}>
      <Text style={styles.text}>{weatherData?.weather[0].description}</Text>
      <Text style={styles.text}>{weatherData?.name}</Text>
      <Text style={styles.text}>{weatherData?.sys.country}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`,
        }}
        style={{ height: 100, width: 100, backgroundColor: "#ffffffa2" }}
      />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  result: {
    flex: 1,
    color: "white",
    height: 300,
    width: 400,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    color: "white",
  },
});

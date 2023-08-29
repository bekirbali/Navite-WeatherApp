import React from "react";
import { StyleSheet, View } from "react-native";
import Result from "../components/Result";
import { Forecast } from "../models";

interface IHome {
  weatherData: Forecast | null;
}

const Home: React.FC<IHome> = ({ weatherData }) => {
  return (
    <View style={styles.data}>
      <Result weatherData={weatherData} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  data: {
    flex: 1,
  },
});

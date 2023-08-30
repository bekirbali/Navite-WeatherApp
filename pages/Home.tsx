import React from "react";
import { StyleSheet, View } from "react-native";
import Result from "../components/Result";
import { Forecast } from "../models";
import Search from "./Search";

interface IHome {
  weatherData: Forecast | null;
}

const Home: React.FC<IHome> = ({ weatherData }) => {
  return (
    <View>
      <View>
        <Search />
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

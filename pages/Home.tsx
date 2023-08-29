import React from "react";
import { View } from "react-native";
import Result from "../components/Result";
import { Forecast } from "../models";

interface IHome {
  weatherData: Forecast | null;
}

const Home: React.FC<IHome> = ({ weatherData }) => {
  return (
    <View>
      <Result weatherData={weatherData} />
    </View>
  );
};

export default Home;

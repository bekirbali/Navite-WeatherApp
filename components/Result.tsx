import { Text, View, StyleSheet } from "react-native";
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

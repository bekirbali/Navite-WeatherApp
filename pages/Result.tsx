import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Forecast } from "../models";

interface IResult {
  weatherData: Forecast | null;
  navigation: any;
}

const Result: React.FC<IResult> = ({ weatherData, navigation }) => {
  return (
    <View style={styles.result}>
      <Text style={styles.text}>{weatherData?.weather[0].description}</Text>
      <Text style={styles.text}>{weatherData?.name}</Text>
      <Text style={styles.text}>{weatherData?.sys.country}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`,
        }}
      />
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  result: {
    flex: 1,
    color: "white",
    height: 300,
    width: "100%",
    // alignItems: "center",
    backgroundColor: "#7a181889",
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "black",
    margin: "auto",
  },
});

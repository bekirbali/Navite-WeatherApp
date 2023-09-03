import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Forecast } from "../models";

interface IResult {
  weatherData: Forecast | null;
  navigation: any;
}

const Result: React.FC<IResult> = ({ weatherData, navigation }) => {
  const backGroundImage = {
    uri: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  };

  return (
    <ImageBackground source={backGroundImage} style={styles.background}>
      <View style={styles.result}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Text style={{ color: "white", marginLeft: 10 }}>Search</Text>
          </TouchableOpacity>
          <View style={styles.place}>
            <Text style={[styles.text, styles.cityName]}>
              {weatherData?.name}
            </Text>
            <Text style={[styles.text, styles.countryName]}>
              {weatherData?.sys?.country}
            </Text>
          </View>
        </View>
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`,
          }}
        />
        <View style={styles.mainTemp}>
          <Text style={[styles.text, styles.temp]}>
            {weatherData?.main?.temp?.toFixed(1)}
          </Text>
          <Text style={styles.super}>℃</Text>
        </View>
        <Text style={styles.text}>{weatherData?.weather[0]?.description}</Text>
      </View>
    </ImageBackground>
  );
};

export default Result;

const styles = StyleSheet.create({
  result: {
    flex: 1,
    color: "white",
    height: 300,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "space-between",
    padding: 10,
  },
  place: {
    flexDirection: "row",
    position: "absolute",
    right: "-35%",
  },
  text: {
    fontSize: 20,
    textAlign: "right",
    color: "white",
  },
  background: {
    flex: 1,
  },
  cityName: {
    fontSize: 36,
    fontWeight: "bold",
  },
  countryName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mainTemp: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    // marginTop: 80,
  },
  temp: {
    fontSize: 60,
    fontWeight: "500",
    borderWidth: 2,
    borderColor: "white",
  },
  super: {
    fontWeight: "500",
    fontSize: 35,
    lineHeight: 45,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
  },
});

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
    <ImageBackground
      source={backGroundImage}
      style={styles.background}
      blurRadius={100}
    >
      <View style={styles.result}>
        <TouchableOpacity
          onPress={() => {
            console.log("search");
            return navigation.navigate("Search");
          }}
          style={styles.searchButton}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
        <View style={styles.topBar}>
          <Text style={[styles.text, styles.cityName]}>
            {weatherData?.name}
          </Text>
          <Text style={[styles.text, styles.countryName]}>
            {weatherData?.sys?.country}
          </Text>
        </View>
        <View style={styles.bottomSide}>
          <Image
            style={{
              width: 200,
              height: 200,
            }}
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
          <Text style={styles.text}>
            {weatherData?.weather[0]?.description}
          </Text>
        </View>
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
    position: "relative",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    width: "100%",
  },
  searchButton: {
    color: "white",
    width: 50,
    height: 50,
    position: "absolute",
    top: 10,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
  searchText: {
    color: "white",
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
    marginLeft: 4,
  },
  mainTemp: {
    flexDirection: "row",
    justifyContent: "center",
  },
  temp: {
    fontSize: 60,
    fontWeight: "500",
  },
  super: {
    fontWeight: "500",
    color: "white",
    fontSize: 35,
    position: "absolute",
    right: -30,
  },
  bottomSide: {
    alignItems: "center",
    marginBottom: 150,
  },
});

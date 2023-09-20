import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import Home from "./pages/Home";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <View>
        <SvgUri width="100px" height="100px" uri="./assets/50n.svg" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  test: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

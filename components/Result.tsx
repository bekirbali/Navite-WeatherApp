import { Text, View, StyleSheet } from "react-native";

const Result = () => {
  return (
    <View style={styles.result}>
      <Text style={styles.text}>Result</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  result: {
    height: 100,
  },
  text: {
    color: "white",
  },
});

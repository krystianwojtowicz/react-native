import { View, StyleSheet } from "react-native";
import { Movies } from "../components/Movies";

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Movies></Movies>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;

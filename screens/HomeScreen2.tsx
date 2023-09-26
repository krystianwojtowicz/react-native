import { View, Text, StyleSheet } from "react-native";

const HomeScreen2: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Just to do navigation</Text>
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

export default HomeScreen2;

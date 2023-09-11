import { View, Text, StyleSheet } from "react-native";

const HomeScreen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Witaj na prostym ekranie2 w React Native z TypeScript!
      </Text>
    </View>
  );
};

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

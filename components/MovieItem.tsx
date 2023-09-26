import { Text, StyleSheet, View } from "react-native";

export const MovieItem = ({ movie }: { movie: FetchedMovieType }) => (
    <View style={styles.text}>
      <Text>Title: {movie.original_title}</Text>
      <Text>Popularity: {movie.popularity}</Text>
    </View>
  );

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
  },
});

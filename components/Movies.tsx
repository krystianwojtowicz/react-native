import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useGetMovieByTitleQuery } from "../store/apiSlice";
import { useState } from "react";
import { MovieItem } from "./MovieItem";

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const data = useGetMovieByTitleQuery(searchQuery);

  return (
    <>
      <Text style={styles.text}>Search movie</Text>
      <View style={styles.view}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </View>
      <ScrollView>
        {data?.data?.results.length > 0 &&
          data.data.results.map((movie: FetchedMovieType) => (
            <View style={styles.container} key={movie.id}>
              <MovieItem movie={movie} />
            </View>
          ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  view: {
    marginVertical: 10,
  },
  text: {
    marginVertical: 10,
  },
});

import { Text, View } from "react-native";
import {
  useGetAllProductsQuery,
  useGetMovieByTitleQuery,
} from "../store/apiSlice";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setMovieId } from "../store/movieIdSlice";

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const { data } = useGetAllProductsQuery({});
  // const { data } = useGetMovieByTitleQuery("Talk to Me");
  const dispatch = useAppDispatch();
  const data = useGetMovieByTitleQuery(searchQuery);
  console.log(data);
  const BASE_URL = "https://api.themoviedb.org/3/";

  const handleSearch = () => {
    // dispatch(setMovieId(movie.id))
    // const data = (useGetMovieByTitleQuery(searchQuery));
    const data = useGetMovieByTitleQuery(searchQuery);
    console.log(data);
  };

  // useEffect(() => {
  //     // Pobranie listy filmów z API
  //     fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
  //         .then(response => response.json())
  //         .then(data => {
  //             // Losowanie indeksu filmu
  //             // const randomIndex = Math.floor(Math.random() * data.results.length);
  //             console.log(data.results[0]);
  //         })
  //         .catch(error => {
  //             console.error('Wystąpił błąd:', error);
  //         });
  // }, []);

  // return (<>{movie.loading && <Text>s</Text>}</>)
  return (
    <>
      <View>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Szukaj</button>
      </View>
      <View>
        {data?.data?.results.length > 0 &&
          data.data.results.map((movie: any) => (
            <Text key={movie.id}>{movie.original_title}</Text>
          ))}
      </View>
    </>
  );
};

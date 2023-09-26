import { API_KEY } from "@env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movies = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovieByTitle: builder.query<any, string>({
      query: (title) => `search/movie?api_key=${API_KEY}&query=${title}`,
    }),
  }),
});

export const { useGetMovieByTitleQuery } = movies;

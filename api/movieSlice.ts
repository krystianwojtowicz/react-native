import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder: any) => ({
    getMovies: builder.query({
      query: (page: any) =>
        `discover/movie?api_key=56ddfbeb9230b5239162133b477b8b62&page=${page}&sort_by=popularity.desc`,
    }),
  }),
});

export const { useGetMoviesQuery } = movieSlice;

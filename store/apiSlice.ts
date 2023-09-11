import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "56ddfbeb9230b5239162133b477b8b62";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (page) =>
        `discover/movie?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`,
    }),
    getMovieByTitle: builder.query({
      query: (title) => `search/movie?api_key=${API_KEY}&query=${title}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetMovieByTitleQuery } = productsApi;
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from './store'

// export type User = {
//     name: string;
// }
// type InitialStateType = { movieId: number | null }

// const initialState: InitialStateType = { movieId: null }

// export type UserListState = {
//     users: User[];
//     loading: boolean;
//     error: boolean;
// }
// const initialState2: UserListState = {
//     users: [],
//     loading: true,
//     error: false,
// }
// const userListSlice = createSlice({
//     name: 'userList',
//     initialState: initialState2,
//     reducers: {}
// })
// export const movieIdSlice = createSlice({
//     name: 'movieId',
//     initialState,
//     reducers: {
//         setMovieId: (state, action: PayloadAction<number | null>) => {
//             state.movieId = action.payload
//         }
//     }
// })

// export default userListSlice.reducer

// export default movieIdSlice.reducer

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const moviesSlice = createApi({
//     reducerPath: "moviesApi",
//     baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
//     endpoints: (builder) => ({
//         getMovies: builder.query({
//             query: () => '/movies',
//         })
//     })
// })

// export const { useGetMoviesQuery } = moviesSlice

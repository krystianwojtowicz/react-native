import { configureStore, combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import movieId from "./apiSlice";
// import userListSlice from "./apiSlice";
import { productsApi }from "./apiSlice";

const rootReducer = combineReducers({
  // movieId: movieId
  userList: productsApi.reducer
})
export const store = configureStore({
  reducer: 
    rootReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>;
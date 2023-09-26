import "react-native-gesture-handler";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { movies } from "./store/apiSlice";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <ApiProvider api={movies}>
      <Navigation />
    </ApiProvider>
  );
}

import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyleSheet, Text, View } from "react-native";
import { Movies } from "./components/Movies";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./store/apiSlice";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
        <Navigation />
      </ApiProvider>
    </Provider>
  );
}

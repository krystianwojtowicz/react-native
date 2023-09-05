import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyleSheet, Text, View } from 'react-native';
import { Movies } from './components/Movies'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { productsApi } from './store/apiSlice'

export default function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi}>
    <View style={styles.container}>
      <Movies></Movies>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </ApiProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Download the redux and react-redux modules first
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Comp1 from './components/Comp1';
import SampleReducer from './SampleReducer';

export default function App() {

  const store = createStore(SampleReducer);

  return (
    <View style={styles.container}>
      <Provider store={store}>
      <Comp1 name="Component 1" />
      <Comp1 name="Component 2" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

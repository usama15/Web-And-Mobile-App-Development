import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './src/navigation/navigation';
import {Provider} from 'react-redux';
import store from './src/store/index';

const App = () => {
  return (
    <>
    <Provider store = {store}>
      <Navigator />
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

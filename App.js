import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MainApp from './src/MainApp';
export default class App extends React.Component {
  render() {
  return (
       <MainApp />
     );
   }
}
AppRegistry.registerComponent('ListItems', () => MainApp);

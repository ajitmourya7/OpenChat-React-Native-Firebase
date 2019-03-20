/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import Home from './src/components/Home';
import Chat from './src/components/Chat';

import {
  Router,
    Scene
} from 'react-native-router-flux';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene key={'home'} component={Home} title={'Home'}/>
          <Scene key={'chat'} component={Chat} title={'Chat'}/>
        </Scene>
      </Router>
    );
  }
}
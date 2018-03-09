import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './screens/login';
import Home from './screens/home';

export default class App extends Component<{}> {
    render() {
        return (
            <Home />
        );
    }
}
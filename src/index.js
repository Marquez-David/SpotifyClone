import React from 'react';
import {AppRegistry } from 'react-native';
import BottomTabNavigation from './navigation/BottomTabNavigation.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BottomTabNavigation);
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigation } from './HomeStackNavigation';
import { LibraryStackNavigation } from './LibraryStackNavigation';
import { SearchStackNavigation } from './SearchStackNavigation';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => (
  <Tab.Navigator initialRouteName='Home' tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{ headerShown: false, focusedIcon: 'home', unfocusedIcon: 'home-outline' }} />
    <Tab.Screen
      name="Explore"
      component={SearchStackNavigation}
      options={{ headerShown: false, focusedIcon: 'search-outline', unfocusedIcon: 'circle' }} />
    <Tab.Screen
      name="Your library"
      component={LibraryStackNavigation}
      options={{ headerShown: false, focusedIcon: 'library', unfocusedIcon: 'library-outline' }} />
  </Tab.Navigator>
);
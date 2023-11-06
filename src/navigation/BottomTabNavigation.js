import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigation } from './HomeStackNavigation';
import { LibraryStackNavigation } from './LibraryStackNavigation';
import { SearchStackNavigation } from './SearchStackNavigation';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => (
  <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle: styles.bottomContainer }}>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <Ionicons name="home-sharp" style={styles.icon} />
          ) : (
            <Ionicons name="home-outline" style={styles.icon} />
          )
        )
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigation}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <>
              <MaterialIcons name="circle" style={styles.circleIcon} />
              <MaterialIcons name="location-searching" style={styles.icon} />
            </>
          ) : (
            <MaterialIcons name="location-searching" style={styles.icon} />
          )
        )
      }}
    />
    <Tab.Screen
      name="Your library"
      component={LibraryStackNavigation}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <Ionicons name="library-sharp" style={styles.icon} />
          ) : (
            <Ionicons name="library-outline" style={styles.icon} />
          )
        )
      }}
    />
  </Tab.Navigator>
);
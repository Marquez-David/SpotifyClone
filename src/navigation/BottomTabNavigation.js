import React from 'react';
import { Text, View, AppRegistry, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import YourLibraryScreen from '../screens/YourLibraryScreen';
import styles from './styles';

import FoundationIcon from 'react-native-vector-icons/Foundation';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

/**
 * Constant that maps different icon component types to their respective imports, enabling dynamic 
 * component selection based on the provided component prop.
 */
const iconComponents = {
  foundationIcon: FoundationIcon,
  octiconsIcon: OcticonsIcon,
  evilIcons: EvilIcons,
  ionicons: Ionicons
}

/**
 * Dynamically renders an icon based on the provided props, utilizing the iconComponents 
 * object to retrieve the appropriate component.
 * @param {*} props 
 * @returns 
 */
function MyIconComponent(props) {
  const MyComponent = iconComponents[props.component];
  return <MyComponent name={props.name} style={props.style} />;
}

/**
 * Renders an icon component based on the provided focus state.
 * @param {*} isFocused 
 * @param {*} focusedIcon 
 * @param {*} unfocusedIcon 
 * @param {*} focusedComponent 
 * @param {*} unfocusedComponent 
 * @returns 
 */
const isIconFocused = (isFocused, focusedIcon, unfocusedIcon, focusedComponent, unfocusedComponent) => {
  return isFocused
    ? <MyIconComponent name={focusedIcon} component={focusedComponent} style={styles.focusedIconStyle} />
    : <MyIconComponent name={unfocusedIcon} component={unfocusedComponent} style={styles.unfocusedIconStyle} />
}

function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle: styles.bottomContainer }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => isIconFocused(focused, "home", "home", "foundationIcon", "octiconsIcon")
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => isIconFocused(focused, "search", "search", "octiconsIcon", "octiconsIcon")
          }}
        />
        <Tab.Screen
          name="Your library"
          component={YourLibraryScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => isIconFocused(focused, "library", "library-outline", "ionicons", "ionicons")
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigation;
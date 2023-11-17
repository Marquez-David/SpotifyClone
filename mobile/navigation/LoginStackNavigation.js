import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../screens/LoginScreen';
import { BottomTabNavigation } from './BottomTabNavigation';

const LoginStack = createNativeStackNavigator();
export const LoginStackNavigation = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <LoginStack.Screen name="HomeStack" component={BottomTabNavigation} options={{ headerShown: false }} />
  </LoginStack.Navigator>
);
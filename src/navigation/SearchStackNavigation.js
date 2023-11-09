import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from '../screens/SearchScreen';

const SearchStack = createNativeStackNavigator();
export const SearchStackNavigation = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="SearchStack" component={SearchScreen} options={{ headerShown: false }} />
  </SearchStack.Navigator>
);
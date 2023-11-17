import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

import { exploreStrings, libraryStrings } from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import styles from './styles';

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <LinearGradient colors={['transparent', colors.appBackground]} locations={[0, 0.75]} style={styles.bottomTabGradient}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const { focusedIcon, unfocusedIcon } = descriptors[route.key].options;

      return (
        <TouchableOpacity key={route.key} style={styles.touchableIcon} onPress={() => navigation.navigate(route.name)}>
          {route.name === exploreStrings.explore ? (
            <>
              {isFocused && <MaterialCommunityIcons name={unfocusedIcon} size={13} style={styles.circleIcon} />}
              <Ionicons name={focusedIcon} size={24} color={colors.spotifyWhite} />
            </>
          ) : (
            <Ionicons name={isFocused ? focusedIcon : unfocusedIcon} size={24} color={colors.spotifyWhite} />
          )}
          <Text style={styles.labelText}>{route.name}</Text>
        </TouchableOpacity>
      );
    })}
  </LinearGradient>
);

export default CustomTabBar;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

import { searchStrings } from '../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import styles from './styles';

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <LinearGradient colors={['transparent', colors.appBackground]} locations={[0, 0.75]} style={styles.bottomTabGradient}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const { focusedIcon, unfocusedIcon, labelText } = descriptors[route.key].options;

      return (
        <TouchableOpacity key={route.key} style={styles.touchableIcon} onPress={() => navigation.navigate(route.name)}>
          {labelText === searchStrings.search ? (
            <>
              {isFocused && <MaterialCommunityIcons name={unfocusedIcon} size={13} style={styles.circleIcon} />}
              <Ionicons name={focusedIcon} size={24} color={'white'} />
            </>
          ) : (
            <Ionicons name={isFocused ? focusedIcon : unfocusedIcon} size={24} color={'white'} />
          )}
          <Text style={styles.labelText}>{labelText}</Text>
        </TouchableOpacity>
      );
    })}
  </LinearGradient>
);

export default CustomTabBar;

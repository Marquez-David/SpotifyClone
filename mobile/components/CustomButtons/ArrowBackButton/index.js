import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../utils/colors';
import styles from './styles';

const ArrowBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.touchableBack} onPress={() => navigation.goBack()}>
      <AntDesign name='arrowleft' size={25} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default ArrowBackButton;
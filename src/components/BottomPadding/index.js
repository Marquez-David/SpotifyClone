import React, { useContext } from 'react';
import { View } from 'react-native';

import { PlayerContext } from '../../context/player';
import styles from './styles';

const BottomPadding = () => {
  const { player } = useContext(PlayerContext);
  return <View style={player.visible ? styles.bottomMaxPadding : styles.bottomPadding} />
};

export default BottomPadding;
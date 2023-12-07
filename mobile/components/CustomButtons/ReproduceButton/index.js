import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { PlayerContext } from '../../../context/player';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../utils/colors';

const ReproduceButton = ({ state }) => {
  const { play, pause } = useContext(PlayerContext);
  return (
    <TouchableOpacity onPress={() => state === 'pause' ? pause() : play()}>
      <Ionicons name={state} size={24} color={colors.spotifyWhite} />
    </TouchableOpacity>
  )
};

export default ReproduceButton; 
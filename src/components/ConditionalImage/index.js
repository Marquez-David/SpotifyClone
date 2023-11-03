import React from 'react';
import { View, Image } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../utils/colors';

const ConditionalImage = ({ image, size, style }) => (
  <>
    {image ? (
      <Image style={style} source={{ uri: image }} />
    ) : (
      <View style={style}>
        <SimpleLineIcons name='music-tone-alt' size={size} color={colors.spotifyGray} />
      </View>
    )}
  </>
);

export default ConditionalImage;
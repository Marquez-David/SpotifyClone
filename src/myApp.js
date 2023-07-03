import {name as appName} from './app.json';
import React from 'react';
import { View, Image } from 'react-native';

const myImage = () => {
  return (
    <View>
      <Image
        source={require('./imagen.jpg')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default myImage;
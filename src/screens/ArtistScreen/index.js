import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

import { useRoute } from "@react-navigation/native";

import { roundNumber } from '../../utils/helpers';

import { artistStrings } from '../../utils/strings';
import styles from './styles';

/*
const useArtist = (artistId) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        let data = await getSpecificArtist(artistId);
        setArtist(data);
      } catch (error) {
        console.log('Error while calling function useArtist(): ' + error);
      }
    };

    fetchArtist();
  }, []);

  return { artist };
};*/

const ArtistScreen = () => {
  const param = useRoute().params.data;
  //console.log(param);
  return (
    <ScrollView style={styles.background}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <Text style={styles.title}>{param.name}</Text>
        <Text style={styles.followers}>{roundNumber(param.followers.total)}</Text>
      </View>
      <Pressable onPress={() => console.log('random mode')} style={styles.randomPressable}>
        <Text style={styles.pressableText}>{artistStrings.randomMode}</Text>
      </Pressable>
    </ScrollView>
  )
};

export default ArtistScreen;
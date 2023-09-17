import React from "react";
import { View, Text, Image } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../utils/colors";
import styles from './styles';

import { shortenText, convertMilliseconds, dayOfWeek } from "../../utils/helpers";

const EpisodeCard = ({ data, podcastTitle }) => (
  <View style={styles.background}>
    <View style={styles.headerView}>
      <Image style={styles.image} source={{ uri: data.images[0].url }} />
      <View style={styles.textHeaderView}>
        <Text style={styles.title}>{shortenText(data.name, 10)}</Text>
        <Text style={styles.podcastTitle}>{podcastTitle}</Text>
      </View>
    </View>
    <View style={styles.descriptionView}>
      <Text style={styles.description}>{shortenText(data.description, 20)}</Text>
    </View>
    <View style={styles.buttonsView}>
      <View style={styles.playButtonView}>
        <Ionicons.Button
          name='play-circle'
          size={36}
          backgroundColor={colors.episodeCardBackground}
          color={colors.spotifyWhite}
          onPress={() => console.log('play')}>
        </Ionicons.Button>
        <Text style={styles.dateText}>{dayOfWeek(data.release_date) + ' • ' + convertMilliseconds(data.duration_ms)}</Text>
      </View>
      <View style={styles.secondaryButtonView}>
        <Ionicons.Button
          name='add-circle-outline'
          size={27}
          backgroundColor={colors.episodeCardBackground}
          color={colors.spotifyGray}
          onPress={() => console.log('add')}>
        </Ionicons.Button>
        <Ionicons.Button
          name='arrow-down-circle-outline'
          size={27}
          backgroundColor={colors.episodeCardBackground}
          color={colors.spotifyGray}
          onPress={() => console.log('download')}>
        </Ionicons.Button>
      </View>
    </View>
  </View>
);

export default EpisodeCard;
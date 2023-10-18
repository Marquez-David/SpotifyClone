import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useRoute } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../utils/colors';
import styles from './styles';

import { podcastStrings, modalDialogStrings } from '../../utils/strings';
import { offsets } from '../../utils/constants';
import { shortenText } from '../../utils/helpers';

import { usePodcastEpisodes } from '../../hooks/usePodcastEpisodes';
import { useOffset } from '../../hooks/useOffset';
import { ModalContext } from '../../context/modal';
import EpisodeCard from '../../components/EpisodeCard';

const PodcastScreen = () => {
  const param = useRoute().params.data;

  const { offset, setLoading, handleScroll } = useOffset(offsets.podcasts);
  const { podcastEpisodes } = usePodcastEpisodes(param.id, offset, setLoading);
  const { openModal } = useContext(ModalContext);

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16} style={styles.background} >
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: param.images[0].url }} />
        <View style={styles.headerTextView}>
          <Text style={styles.titleText}>{param.name}</Text>
          <Text style={styles.publisherText}>{param.publisher}</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.followButton} onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
          <Text style={styles.followButtonText}>{podcastStrings.follow}</Text>
        </TouchableOpacity>
        <Entypo.Button
          name='dots-three-vertical'
          style={{ marginLeft: 9 }}
          size={16}
          backgroundColor={colors.appBackground}
          color={colors.spotifyGray}
          onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
        </Entypo.Button>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>{shortenText(param.description, 26)}</Text>
      </View>
      <View style={styles.episodesHeaderView}>
        <Text style={styles.episodesHeaderText}>{podcastStrings.allEpisodes}</Text>
      </View>
      <View style={styles.songsView}>
        {podcastEpisodes?.map((item) => (
          <EpisodeCard key={item.id} data={item} podcastTitle={param.type} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PodcastScreen;
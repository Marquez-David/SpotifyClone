import React from "react";
import { View, Text, Image } from "react-native";

import { useIsEpisodeSaved } from "../../hooks/useIsEpisodeSaved";

import CheckButton from "../CustomButtons/CheckButton";
import DownloadButton from "../CustomButtons/DownloadButton";
import ShareButton from "../CustomButtons/ShareButton";
import OptionsButton from "../CustomButtons/OptionsButton";
import PlayButton from "../CustomButtons/PlayButton";

import { saveEpisode, unsaveEpisode } from "../../services/requests";
import colors from "../../utils/colors";
import styles from './styles';

import { shortenText, convertMilliseconds, dayOfWeek } from "../../utils/helpers";

const handleEpisodeSave = async (isSaved, id, refetch) => {
  isSaved ? await unsaveEpisode(id) : await saveEpisode(id);
  refetch();
};

const EpisodeCard = ({ data }) => {
  const { isSaved, refetch } = useIsEpisodeSaved(data.id);
  return (
    <View style={styles.background}>
      <View style={styles.headerView}>
        <Image style={styles.image} source={{ uri: data.images[0].url }} />
        <View style={styles.textHeaderView}>
          <Text style={styles.title}>{shortenText(data.name, 65)}</Text>
        </View>
      </View>
      <Text style={styles.description}>{shortenText(data.description, 110)}</Text>
      <Text style={styles.dateText}>{dayOfWeek(data.release_date) + ' • ' + convertMilliseconds(data.duration_ms)}</Text>
      <View style={styles.buttonsView}>
        <View style={styles.leftButtons}>
          <CheckButton isSaved={isSaved} onPress={() => handleEpisodeSave(isSaved, data.id, refetch)} />
          <DownloadButton />
          <ShareButton />
          <OptionsButton />
        </View>
        <View style={styles.righButtons}>
          <PlayButton backgroundColor={colors.spotifyWhite} size={26} />
        </View>
      </View>
      <View style={styles.bottomBar}></View>
    </View >
  )
};

export default EpisodeCard;
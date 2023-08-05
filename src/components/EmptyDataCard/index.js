import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { emptyDataStrings, libraryStrings } from '../../utils/Strings';

/**
 * Maps subcategories to corresponding texts for titles, descriptions, and button texts.
 * @param {*} subcategory 
 * @returns 
 */
const parseTexts = (subcategory) => {
  const textMappings = {
    [libraryStrings.playlists]: {
      title: emptyDataStrings.playlistsTitle,
      description: emptyDataStrings.playlistsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.artists]: {
      title: emptyDataStrings.artistsTitle,
      description: emptyDataStrings.artistsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.albums]: {
      title: emptyDataStrings.albumsTitle,
      description: emptyDataStrings.albumsDescription,
      buttonText: emptyDataStrings.browseMusic
    },
    [libraryStrings.episodes]: {
      title: emptyDataStrings.episodesTitle,
      description: emptyDataStrings.episodesDescription,
      buttonText: emptyDataStrings.browsePodcasts
    },
    [libraryStrings.downloads]: {
      title: emptyDataStrings.downloadsTitle,
      description: emptyDataStrings.downloadsDescription,
      buttonText: emptyDataStrings.browsePodcasts
    },
    [libraryStrings.programs]: {
      title: emptyDataStrings.programsTitle,
      description: emptyDataStrings.programsDescription,
      buttonText: emptyDataStrings.browsePodcasts
    }
  };

  return textMappings[subcategory] || {};
};

const EmptyDataCard = ({ subcategory }) => {
  const { title, description, buttonText } = parseTexts(subcategory);

  return (
    <View style={styles.emptyDataCardView}>
      <View style={styles.textView}>
        <Text style={styles.titleText}> {title}</Text>
        <Text style={styles.descriptionText}> {description}</Text>
      </View>
      <View style={styles.pressableView}>
        <Pressable style={styles.pressable}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EmptyDataCard;
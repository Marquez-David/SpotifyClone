import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { carouselStrings } from '../../utils/Strings';
import styles from './styles';

/**
 * Parse the items parameter and returns the corresponding title for each case
 * @param {*} items 
 * @param {*} title 
 * @returns 
 */
const parseTitle = (items, title) => {
  var newTitle = title;
  if (title === carouselStrings.findOutMoreAbout) {
    newTitle += items.data.items[0].artists[0].name;
  }

  return newTitle;
}

/**
 * Parse the item parameter and returns the corresponding url for each case
 * @param {*} item 
 * @param {*} carouselTitle 
 * @returns 
 */
const parseSource = (item, carouselTitle) => {
  var url = '';
  if (carouselTitle === carouselStrings.recentlyPlayed) {
    url = item.track.album.images[0].url;
  } else if (carouselTitle === carouselStrings.yourPlaylists) {
    url = item.images[0].url;
  } else if (carouselTitle === carouselStrings.findOutMoreAbout) {
    url = item.images[0].url;
  } else if(carouselTitle === carouselStrings.yourPodcasts) {
    url = item.show.images[0].url;
  }

  return url;
}

/**
 * Parse the item parameter and returns the corresponding description for each case
 * @param {*} item 
 * @param {*} carouselTitle 
 * @returns 
 */
const parseDescription = (item, carouselTitle) => {
  var description = '';
  if (carouselTitle === carouselStrings.recentlyPlayed) {
    description = item.track.name;
  } else if (carouselTitle === carouselStrings.yourPlaylists) {
    description = item.name + carouselStrings.listComplementString;
  } else if (carouselTitle === carouselStrings.findOutMoreAbout) {
    description = item.name + '\n' + item.artists[0].name + carouselStrings.albumComplementString;
  } else if(carouselTitle === carouselStrings.yourPodcasts) {
    description = item.show.name + '\n' + carouselStrings.podcastComplementsString + item.show.publisher;
  }

  return description;
}

const HorizontalCarousel = ({ items, title }) => {
  return (
    <View style={styles.carouseView}>
      <Text style={styles.titleText}>{parseTitle(items, title)}</Text>
      <FlatList
        data={items.data.items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageView}>
            <Image style={styles.carouselImage} source={{ uri: parseSource(item, title) }} />
            {<Text style={styles.descriptionText}>{parseDescription(item, title)}</Text>}
          </View>
        )}
      />
    </View>
  )
};

export default HorizontalCarousel;
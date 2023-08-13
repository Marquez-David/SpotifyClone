import React from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { carouselStrings } from '../../utils/strings';
import styles from './styles';

import { parseCarouselData } from '../../utils/helpers';

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
};

const HorizontalCarousel = ({ items, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.carouseView}>
      <Text style={styles.titleText}>{parseTitle(items, title)}</Text>
      <FlatList
        data={items.data.items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.imageView} onPress={() => navigation.navigate("Tracklist", { title: item.name, data: item })}>
            <Image style={styles.carouselImage} source={{ uri: parseCarouselData(item, title).url }} />
            {<Text style={styles.descriptionText}>{parseCarouselData(item, title).description}</Text>}
          </Pressable>
        )}
      />
    </View>
  );
};

export default HorizontalCarousel;
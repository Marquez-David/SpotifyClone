import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';
import { libraryStrings } from '../../utils/Strings';

function renderPressedBar() {
  return <View style={styles.isPressedBar}></View>;
}

const onPressPressable = (pressable, setPressed) => {
  setPressed(pressable);
  console.log(pressable);
}

const YourLibraryScreen = () => {
  const [pressed, setPressed] = useState(libraryStrings.playlists);
  return (
    <View style={styles.background}>
      <View style={styles.headers}>
        <Pressable onPress={() => console.log('Musica')}>
          <Text style={styles.screenHeaderText}>{libraryStrings.music}</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Podcasts')}>
          <Text style={styles.screenHeaderText}>{libraryStrings.podcasts}</Text>
        </Pressable>
      </View>
      <View style={styles.headers}>
        <Pressable style={styles.categoriesPressables} onPress={() => onPressPressable(libraryStrings.playlists, setPressed)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.playlists}</Text>
          {pressed === libraryStrings.playlists && renderPressedBar()}
        </Pressable>
        <Pressable style={styles.categoriesPressables} onPress={() => onPressPressable(libraryStrings.artists, setPressed)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.artists}</Text>
          {pressed === libraryStrings.artists && renderPressedBar()}
        </Pressable>
        <Pressable style={styles.categoriesPressables} onPress={() => onPressPressable(libraryStrings.albums, setPressed)}>
          <Text style={styles.categoriesHeaderText}>{libraryStrings.albums}</Text>
          {pressed === libraryStrings.albums && renderPressedBar()}
        </Pressable>
      </View>
    </View>
  );
};

export default YourLibraryScreen;
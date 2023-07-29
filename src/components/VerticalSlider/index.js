import React from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import { libraryStrings, verticalSliderStrings } from '../../utils/Strings';
import colors from '../../utils/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

const renderSearchBar = (labelText) => {
	return (
		<View style={styles.searchBarView}>
			<TextInput
				placeholder={labelText}
				placeholderTextColor={colors.spotifyWhite}
				style={styles.searchBar}></TextInput>
		</View>
	);
}

const renderPlaylistsSlider = (items) => {
	return (
		<ScrollView style={styles.verticalSliderView}>
			{renderSearchBar(verticalSliderStrings.searchForPlayLists)}
			<View style={styles.imageView}>
				<View style={styles.iconView}>
					<Ionicons name='add' size={30} color={colors.spotifyWhite}></Ionicons>
				</View>
				<View style={styles.textView}>
					<Text style={styles.playlistNameText}>{libraryStrings.createPlaylist}</Text>
				</View>
			</View>
			{items.data.items.map((item) =>
				<View key={item.id} style={styles.imageView}>
					<Image style={styles.carouselImage} source={{ uri: item.images[0].url }} />
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>{item.name}</Text>
						<Text style={styles.ownerText}>{verticalSliderStrings.by + item.owner.display_name}</Text>
					</View>
				</View>
			)}
		</ScrollView>
	)
};

const renderArtistsSlider = (items) => {
	return (
		<ScrollView style={styles.verticalSliderView}>
			{renderSearchBar(verticalSliderStrings.searchForArtists)}
			{items.data.artists.items.map((item) =>
				<View key={item.id} style={styles.imageView}>
					<Image style={styles.carouselArtistsImage} source={{ uri: item.images[0].url }} />
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>{item.name}</Text>
					</View>
				</View>
			)}
		</ScrollView>
	)
};

const renderAlbumsSlider = (items) => {
	return (
		<ScrollView style={styles.verticalSliderView}>
			{renderSearchBar(verticalSliderStrings.searchForAlbums)}
			{items.data.items.map((item) =>
				<View key={item.album.id} style={styles.imageView}>
					<Image style={styles.carouselImage} source={{ uri: item.album.images[0].url }} />
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>{item.album.name}</Text>
						<Text style={styles.ownerText}>{verticalSliderStrings.by + item.album.artists[0].name}</Text>
					</View>
				</View>
			)}
		</ScrollView>
	)
};

const VerticalSlider = ({ items, category }) => {
	var component;
	if (category === libraryStrings.playlists) {
		component = renderPlaylistsSlider(items);
	} else if (category === libraryStrings.artists) {
		component = renderArtistsSlider(items);
	} else if (category === libraryStrings.albums) {
		component = renderAlbumsSlider(items);
	}

	return component;
};

export default VerticalSlider;
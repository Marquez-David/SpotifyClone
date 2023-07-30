import React from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

import { libraryStrings, verticalSliderStrings } from '../../utils/Strings';
import colors from '../../utils/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Returns an object data with the uri, name, description, and id properties, depending on the category provided.
 * @param {*} item 
 * @param {*} category 
 * @returns 
 */
const parseData = (item, category) => {
	var data = {};
	if (category === libraryStrings.playlists || category === libraryStrings.artists) {
		data.uri = item.images[0].url;
		data.name = item.name;
		data.description = category === libraryStrings.playlists ? item.owner.display_name : '';
		data.id = item.id;
	} else if (category === libraryStrings.albums) {
		data.uri = item.album.images[0].url;
		data.name = item.album.name;
		data.description = item.album.artists[0].name;
		data.id = item.album.id;
	}
	return data;
};

/**
 * Returns a simple search bar.
 * @param {*} labelText 
 * @returns 
 */
const renderSearchBar = (labelText) => (
	<View style={styles.searchBarView}>
		<TextInput
			placeholder={labelText}
			placeholderTextColor={colors.spotifyWhite}
			style={styles.searchBar}></TextInput>
	</View>
);

/**
 * Renders a component with item details inside and uses the parseData function to extract data from the it.
 * @param {*} item 
 * @param {*} category 
 * @returns 
 */
const renderItem = (item, category) => {
	const data = parseData(item, category);
	return (
		<View key={data.id} style={styles.imageView}>
			<Image
				style={category !== libraryStrings.artists ? styles.carouselImage : styles.carouselArtistsImage}
				source={{ uri: data.uri }}
			/>
			<View style={styles.textView}>
				<Text style={styles.playlistNameText}>{data.name}</Text>
				{category != libraryStrings.artists &&
					<Text style={styles.ownerText}>{verticalSliderStrings.by + data.description}</Text>
				}
			</View>
		</View>
	);
};

const VerticalSlider = ({ items, category, searchLabel }) => {
	return (
		<ScrollView style={styles.verticalSliderView}>
			{renderSearchBar(searchLabel)}
			{category === libraryStrings.playlists &&
				<View style={styles.imageView}>
					<View style={styles.iconView}>
						<Ionicons name='add' size={30} color={colors.spotifyWhite}></Ionicons>
					</View>
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>{libraryStrings.createPlaylist}</Text>
					</View>
				</View>
			}
			{items.map((item) => renderItem(item, category))}
		</ScrollView>
	);
};

export default VerticalSlider;
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

import SearchBar from '../SearchBar';

import { libraryStrings, verticalSliderStrings } from '../../utils/Strings';
import colors from '../../utils/Colors';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

/**
 * This custom hook manages the state of searchText and its corresponding setSearchText.
 * It resets the searchText whenever the "category" parameter changes.
 * @param {*} category 
 * @returns 
 */
const useSearchText = (category) => {
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setSearchText('');
	}, [category]);

	return { searchText, setSearchText };
};

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
 * Filters the provided "items" array to search only the items whose name contains the provided "searchText."
 * @param {*} items 
 * @param {*} category 
 * @param {*} searchText 
 * @returns 
 */
const getFilteredItems = (items, category, searchText) => {
	return items.filter((item) => parseData(item, category).name.toLowerCase().includes(searchText.toLowerCase()));
};

/**
 * This component renders an image and its related text data based on the provided "item" object and "category." 
 * @param {*} param0 
 * @returns 
 */
const Item = ({ item, category }) => {
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
	const { searchText, setSearchText } = useSearchText(category);
	return (
		<ScrollView style={styles.verticalSliderView}>
			<SearchBar labelText={searchLabel} valueText={searchText} changeText={setSearchText} />
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
			{getFilteredItems(items, category, searchText).map((item, index) =>
				<Item key={index} item={item} category={category} />
			)}
		</ScrollView>
	);
};

export default VerticalSlider;
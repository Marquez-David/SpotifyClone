import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { libraryStrings, verticalSliderStrings } from '../../utils/Strings';
import colors from '../../utils/Colors';

import SearchBar from '../SearchBar';

/**
 * This custom hook manages the state of searchText and its corresponding setSearchText.
 * It resets the searchText whenever the "subcategory" parameter changes.
 * @param {*} subcategory 
 * @returns 
 */
const useSearchText = (subcategory) => {
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		setSearchText('');
	}, [subcategory]);

	return { searchText, setSearchText };
};

/**
 * Returns an object data with the uri, name, description, and id properties, depending on the subcategory provided.
 * @param {*} item 
 * @param {*} subcategory 
 * @returns 
 */
const parseData = (item, subcategory) => {
	var data = {};
	if (subcategory === libraryStrings.playlists || subcategory === libraryStrings.artists) {
		data.uri = item.images[0].url;
		data.name = item.name;
		data.description = subcategory === libraryStrings.playlists ? verticalSliderStrings.by + item.owner.display_name : '';
		data.id = item.id;
	} else if (subcategory === libraryStrings.albums) {
		data.uri = item.album.images[0].url;
		data.name = item.album.name;
		data.description = verticalSliderStrings.by + item.album.artists[0].name;
		data.id = item.album.id;
	} else if(subcategory === libraryStrings.programs) {
		data.uri = item.show.images[0].url;
		data.name = item.show.name;
		data.description = "";
		data.id = item.show.id;
	}

	return data;
};

/**
 * Uses an object mapping to determine the appropriate search text based on the subcategory. 
 * @param {*} subcategory 
 * @returns 
 */
const parseSearchText = (subcategory) => {
	const subcategoryToSearchText = {
		[libraryStrings.playlists]: verticalSliderStrings.searchForPlayLists,
		[libraryStrings.artists]: verticalSliderStrings.searchForArtists,
		[libraryStrings.albums]: verticalSliderStrings.searchForAlbums,
	};

	return subcategoryToSearchText[subcategory];
};

/**
 * Filters the provided "items" array to search only the items whose name contains the provided "searchText."
 * @param {*} items 
 * @param {*} subcategory 
 * @param {*} searchText 
 * @returns 
 */
const getFilteredItems = (items, subcategory, searchText) => {
	return items.filter((item) => parseData(item, subcategory).name.toLowerCase().includes(searchText.toLowerCase()));
};

/**
 * This component renders an image and its related text data based on the provided "item" object and "subcategory." 
 * @param {*} param0 
 * @returns 
 */
const Item = ({ item, subcategory }) => {
	const data = parseData(item, subcategory);
	return (
		<View key={data.id} style={styles.imageView}>
			<Image
				style={subcategory !== libraryStrings.artists ? styles.carouselImage : styles.carouselArtistsImage}
				source={{ uri: data.uri }}
			/>
			<View style={styles.textView}>
				<Text style={styles.playlistNameText}>{data.name}</Text>
				{(subcategory != libraryStrings.artists && subcategory != libraryStrings.programs) &&
					<Text style={styles.ownerText}>{data.description}</Text>
				}
			</View>
		</View>
	);
};

const VerticalSlider = ({ category, subcategory, data }) => {
	const { searchText, setSearchText } = useSearchText(subcategory);
	const isPlaylistsSubcategory = subcategory === libraryStrings.playlists;
	
	return (
		<ScrollView style={styles.verticalSliderView}>
			{(category === libraryStrings.music) && (
				<SearchBar
					labelText={parseSearchText(subcategory)}
					valueText={searchText}
					changeText={setSearchText}
				/>
			)}

			{isPlaylistsSubcategory && (
				<View style={styles.imageView}>
					<View style={styles.iconView}>
						<Ionicons name='add' size={30} color={colors.spotifyWhite} />
					</View>
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>
							{libraryStrings.createPlaylist}
						</Text>
					</View>
				</View>
			)}

			{data && getFilteredItems(data, subcategory, searchText).map((item, index) => (
				<Item key={index} item={item} subcategory={subcategory} />
			))}
		</ScrollView>
	);
};

export default VerticalSlider;
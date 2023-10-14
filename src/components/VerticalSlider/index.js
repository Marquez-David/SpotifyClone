import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { libraryStrings, verticalSliderStrings } from '../../utils/strings';
import colors from '../../utils/colors';

import { parseLibraryData } from '../../utils/helpers';

import SearchBar from '../SearchBar';
import VerticalSliderItem from '../VerticalSliderItem';

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
	return items.filter((item) => parseLibraryData(item, subcategory).data.name.toLowerCase().includes(searchText.toLowerCase()));
};

const VerticalSlider = ({ category, subcategory, data }) => {
	const { searchText, setSearchText } = useSearchText(subcategory);

	const isPlaylistsSubcategory = subcategory === libraryStrings.playlists;
	const items = data && getFilteredItems(data, subcategory, searchText);

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

			{items.map((item) => {
				const { data, description } = parseLibraryData(item, subcategory);
				return (
					<VerticalSliderItem key={data.id} data={data} subcategory={subcategory} description={description} />
				);
			})}
		</ScrollView>
	);
};

export default VerticalSlider;
import React, { useContext } from 'react';
import { View, Text, Pressable, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { libraryStrings, verticalSliderStrings, modalDialogStrings } from '../../utils/strings';
import colors from '../../utils/colors';

import { parseLibraryData } from '../../utils/helpers';

import SearchBar from '../SearchBar';
import VerticalSliderItem from '../VerticalSliderItem';

import { useSearchText } from '../../hooks/useSearchText';
import { ModalContext } from '../../context/modal';

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
	const { openModal } = useContext(ModalContext);

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
				<Pressable style={styles.imageView} onPress={() => openModal(modalDialogStrings.undeDevelopment)}>
					<View style={styles.iconView}>
						<Ionicons name='add' size={30} color={colors.spotifyWhite} />
					</View>
					<View style={styles.textView}>
						<Text style={styles.playlistNameText}>
							{libraryStrings.createPlaylist}
						</Text>
					</View>
				</Pressable>
			)}

			{items.map((item) => {
				const { data, description } = parseLibraryData(item, subcategory);
				return (
					<View key={data.id} style={styles.verticalSliderItemView}>
						<VerticalSliderItem data={data} subcategory={subcategory} description={description} />
					</View>
				);
			})}
		</ScrollView>
	);
};

export default VerticalSlider;
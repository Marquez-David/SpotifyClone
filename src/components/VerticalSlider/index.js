import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

import { subcategories } from '../../utils/strings';

import { parseLibraryData, parseSearchText } from '../../utils/helpers';

import SearchBar from '../SearchBar';
import CreatePlaylistCard from '../CreatePlaylistCard';
import VerticalSliderItem from '../VerticalSliderItem';

import { useSearchText } from '../../hooks/useSearchText';

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

const VerticalSlider = ({ data, subcategory }) => {
	const { searchText, setSearchText } = useSearchText(subcategory);
	const items = data && getFilteredItems(data, subcategory, searchText);

	return (
		<ScrollView style={styles.verticalSliderView}>
			<SearchBar labelText={parseSearchText(subcategory)} valueText={searchText} changeText={setSearchText} />
			{subcategory === subcategories.playlists && <CreatePlaylistCard />}

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
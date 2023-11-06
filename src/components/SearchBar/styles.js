import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Search bar view style.
	 * Represents a search bar view with the following properties:
	 * - borderRadius: 8 (border radius in points)
	 * - flexDirection: 'row' (horizontal layout direction)
	 * - alignItems: 'center' (center items vertically)
	 * - backgroundColor: colors.spotifySuperDarkGray (background color using the 'spotifySuperDarkGray' color from the 'colors' object)
	*/
	searchBarView: {
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.spotifySuperDarkGray,
	},
	/**
	 * Search bar text style.
	 * Represents the text style for the search bar with the following properties:
	 * - height: 37 (height in points)
	 * - marginTop: 3 (vertical margin spacing)
	 * - color: colors.spotifyWhite (text color using the 'spotifyWhite' color from the 'colors' object)
	*/
	searchBarText: {
		height: 37,
		marginTop: 3,
		color: colors.spotifyWhite,
	},
});

export default styles;
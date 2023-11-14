import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Style for the search bar view.
	 * Provides the following properties:
	 * - flex: 1 (takes up all available space)
	 * - height: 35 (height of 35 units)
	 * - borderRadius: 8 (border radius of 8 units)
	 * - flexDirection: 'row' (elements arranged in a row)
	 * - alignItems: 'center' (center alignment of elements vertically)
	 * - backgroundColor: colors.spotifyWhite (background color using the Spotify white color)
	*/
	searchBarView: {
		flex: 1,
		height: 35,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.spotifyWhite,
	},
	/**
	 * Style for the search bar text.
	 * Provides the following properties:
	 * - fontSize: 12 (font size of 12 units)
	 * - marginTop: 0 (top margin of 0 units)
	 * - color: colors.spotifySuperDarkGray (text color using the Spotify super dark gray color)
	*/
	searchBarText: {
		fontSize: 12,
		marginTop: 0,
		color: colors.spotifySuperDarkGray,
	},
});

export default styles;
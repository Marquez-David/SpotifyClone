import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * Background style.
	 * Represents the background style with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - paddingHorizontal: 10 (horizontal padding of 10 units)
	 * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
	*/
	background: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: colors.appBackground,
	},
	/**
	 * Icons View style.
	 * Represents the style for an icons view with the following properties:
	 * - flexDirection: 'row' (horizontal layout with children)
	 * - alignItems: 'center' (centered alignment of children)
	 * - justifyContent: 'space-between' (even space distribution between children)
	 * - paddingHorizontal: 5 (horizontal padding of 5 units)
	*/
	iconsView: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 5,
	},
	/**
	 * Sort Icon style.
	 * Represents the style for a sort icon with the following properties:
	 * - fontSize: 25 (font size of 25 units)
	 * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
	*/
	sortIcon: {
		fontSize: 25,
		color: colors.spotifyWhite,
	},
	/**
	 * Grid Icon style.
	 * Represents the style for a grid icon with the following properties:
	 * - fontSize: 25 (font size of 25 units)
	 * - color: colors.spotifyWhite (icon color using the 'spotifyWhite' color from the 'colors' object)
	*/
	gridIcon: {
		fontSize: 25,
		color: colors.spotifyWhite,
	},
	/**
	 * Fallback View style.
	 * Represents the style for a fallback view with the following properties:
	 * - marginVertical: Dimensions.get('window').height / 5 (vertical margin based on screen height)
	*/
	fallbackView: {
		marginVertical: Dimensions.get('window').height / 5,
	}
});

export default styles;
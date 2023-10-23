import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
	/**
	 * App background style.
	 * Represents the background style for the entire app with the following properties:
	 * - flex: 1 (flexible size to fit available space)
	 * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
	*/
	background: {
		flex: 1,
		backgroundColor: colors.appBackground,
	},
	/**
	 * Fallback View style.
	 * Represents the style for a fallback view with the following properties:
	 * - marginVertical: Dimensions.get('window').height / 3.5 (vertical margin based on window dimensions)
	*/
	fallbackView: {
		marginVertical: Dimensions.get('window').height / 3.5,
	},
});

export default styles;
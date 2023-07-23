import { StyleSheet } from 'react-native';
import colors from '../../utils/Colors';

const styles = StyleSheet.create({
    /**
     * View style for the entire carousel
     */
    carouseView: {
        flex: 1,
        marginLeft: 10,
    },
    /**
     * Specific view style for each image
     */
    imageView: {
        flex: 1,
        marginRight: 15,
        height: 190,
        width: 150,

    },
    /**
     * Image style
     */
    carouselImage: {
        height: 150,
        width: 150,
    },
    /**
     * Carousel title style
     */
    titleText: {
        color: colors.spotifyWhite,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'left',
        marginBottom: 10,
    },
    /**
     * Text style for image descriptions
     */
    descriptionText: {
        color: colors.spotifyWhite,
    },
    
});

export default styles;
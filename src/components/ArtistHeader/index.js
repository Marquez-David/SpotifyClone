import React, { useState, useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';

import { useNavigation } from "@react-navigation/native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { userFollowArtist, followArtist, unfollowArtist } from '../../services/SpotifyRequests';
import { podcastStrings } from '../../utils/strings';
import colors from '../../utils/colors';
import styles from './styles';

/**
 * A custom hook for checking if the current user follows a specific artist based on the provided artist ID.
 * @param {string} artistId - The ID of the artist to be checked for follow status.
 * @returns {Object} An object containing a boolean indicating whether the user follows the artist.
 */
const useUserFollowArtist = (artistId) => {
  const [userFollowsArtist, setUserFollowsArtist] = useState(null);

  useEffect(() => {
    const fetchUserFollowArtist = async () => {
      try {
        let data = await userFollowArtist(artistId);
        setUserFollowsArtist(data?.[0]);
      } catch (error) {
        console.log('Error while calling function fetchUserFollowArtist(): ' + error);
      }
    };

    fetchUserFollowArtist();
  }, []);

  return { userFollowsArtist, setUserFollowsArtist };
};

/**
 * A custom hook for managing button properties based on the user's follow status for an artist.   
 * @param {boolean} followArtist - A boolean indicating whether the user follows the artist.
 * @returns {Object} An object containing the button text to be displayed.
 */
const useButtonProps = (userFollowsArtist) => {
  const [buttonText, setButtonText] = useState(userFollowsArtist ? podcastStrings.following : podcastStrings.follow);

  useEffect(() => {
    setButtonText(userFollowsArtist ? podcastStrings.following : podcastStrings.follow);
  }, [userFollowsArtist]);

  return { buttonText, setButtonText };
};

/**
 * Handles following or unfollowing a specific artist based on user interaction.
 * @param {string} artistId - The ID of the artist to be followed or unfollowed.
 * @param {boolean} userFollowsArtist - A boolean indicating whether the user currently follows the artist.
 * @param {function} setButtonText - A function to set the text of a button based on the action.
 * @param {function} setUserFollowsArtist - A function to update the user's follow status for the artist.
 */
const handleFollowArtist = async (artistsId, useFollowsArtist, setButtonText, setUserFollowsArtist) => {
  if (useFollowsArtist) {
    await unfollowArtist(artistsId);
    setUserFollowsArtist(false);
    setButtonText(podcastStrings.follow);
  } else {
    await followArtist(artistsId);
    setUserFollowsArtist(true);
    setButtonText(podcastStrings.following);
  }
};

const ArtistHeader = ({ artist }) => {
  const navigation = useNavigation();
  const { userFollowsArtist, setUserFollowsArtist } = useUserFollowArtist(artist.id);
  const { buttonText, setButtonText } = useButtonProps(userFollowsArtist);
  return (
    <View style={styles.artistHeaderView}>
      <AntDesign.Button
        name='arrowleft'
        size={23}
        backgroundColor={'transparent'}
        color={colors.spotifyWhite}
        style={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}>
      </AntDesign.Button>
      <View style={styles.rightButtonsView}>
        <Pressable style={styles.followButton} onPress={() => handleFollowArtist(artist.id, userFollowsArtist, setButtonText, setUserFollowsArtist)}>
          <Text style={styles.followButtonText}>{buttonText}</Text>
        </Pressable>
        <Entypo.Button
          name='dots-three-vertical'
          size={19}
          backgroundColor={'transparent'}
          color={colors.spotifyWhite}
          style={{ marginLeft: 10 }}
          onPress={() => console.log('dots')}>
        </Entypo.Button>
      </View>
    </View>
  )
};

export default ArtistHeader;
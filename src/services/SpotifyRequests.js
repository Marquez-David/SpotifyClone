import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

/**
 * Fetch the user's recently played songs usgin axios.
 * @returns 
 */
export async function getRecentlyPlayedSongs() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/player/recently-played?limit=7`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

export async function getUserPlaylists() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/playlists`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

/**
 * Gets the artist most listened to by the user
 * @returns 
 */
export async function getArtists() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/top/artists`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

export async function getArtistAlbums(artistId) {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/artists/${artistId}/albums?limit=7`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

export async function getPodcasts() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/shows?limit=7`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

export async function getSavedAlbums() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/albums`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

export async function getFollowingArtists() {
    const accessToken = await AsyncStorage.getItem("spotifyToken");
    try {
        const response = await axios(
            {
                method: "GET",
                url: `https://api.spotify.com/v1/me/following?type=artist`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response;
    } catch (error) {
        console.log("Error while fetching API: " + error.message);
    }
}

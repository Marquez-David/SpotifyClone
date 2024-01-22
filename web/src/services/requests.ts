import axios from "axios"

/**
 * Retrieves various types of content from the user's Spotify library.
 * @returns {Array} - An array containing user's library content including playlists, albums, artists, episodes, and podcasts.
 */
export const getLibraryContent = async () => {
  const access_token = localStorage.getItem('token')
  try {
    const playlists_response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/me/playlists`,
      headers: { Authorization: `Bearer ${access_token}` }
    })

    const albums_response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/me/albums`,
      headers: { Authorization: `Bearer ${access_token}` }
    })

    const artists_response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/me/following?type=artist`,
      headers: { Authorization: `Bearer ${access_token}` }
    })

    const podcasts_response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/me/shows`,
      headers: { Authorization: `Bearer ${access_token}` }
    });

    const playlists = playlists_response.data.items;
    const albums = albums_response.data.items.map(obj => obj.album);
    const artists = artists_response.data.artists.items;
    const podcasts = podcasts_response.data.items.map(obj => obj.show);

    return [...playlists, ...albums, ...artists, ...podcasts];

  } catch (error) {
    console.error('Error while fetching user playlists: ' + error.message)
  }
}
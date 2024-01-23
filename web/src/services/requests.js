import axios from "axios"

/*
|================================================================================================================|
|========================================== SIDEBAR CONTENT =====================================================|
|================================================================================================================|
*/

/**
 * Retrieves the user's library content, including playlists, albums, followed artists, and podcasts, from the Spotify API.
 * @async
 * @function
 * @returns {Promise<Array>} A promise that resolves to an array containing user library content.
 * @throws {Error} If there is an error while fetching the user's library content.
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
    })

    const playlists = playlists_response.data.items
    const albums = albums_response.data.items.map(obj => obj.album)
    const artists = artists_response.data.artists.items
    const podcasts = podcasts_response.data.items.map(obj => obj.show)

    return [...playlists, ...albums, ...artists, ...podcasts]

  } catch (error) {
    console.error('Error while fetching user playlists: ' + error.message)
  }
}

/*
|================================================================================================================|
|========================================= HOME CONTENT =========================================================|
|================================================================================================================|
*/

/**
 * Retrieves a list of recently played content from the Spotify API.
 * @async
 * @function
 * @returns {Promise<Array>} A promise that resolves to an array of recently played items.
 * @throws {Error} If there is an error while fetching the recently played content.
 */
export const getRecentlyPlayed = async () => {
  const access_token = localStorage.getItem('token')
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/me/player/recently-played?limit=6`,
      headers: { Authorization: `Bearer ${access_token}` }
    })
    return response.data.items
  } catch (error) {
    console.error('Error while fetching recently played content: ' + error.message)
  }
}

/**
 * Retrieves a list of featured playlists from the Spotify API.
 * @async
 * @function
 * @returns {Promise<Array>} A promise that resolves to an array of featured playlists.
 * @throws {Error} If there is an error while fetching the featured playlists.
 */
export const getFeaturedPlaylists = async () => {
  const access_token = localStorage.getItem('token')
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/browse/featured-playlists?limit=7`,
      headers: { Authorization: `Bearer ${access_token}` }
    })
    return response.data.playlists.items
  } catch (error) {
    console.error('Error while fetching featured playlists: ' + error.message)
  }
}
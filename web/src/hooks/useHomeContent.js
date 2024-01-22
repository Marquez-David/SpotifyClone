import { useState, useEffect } from 'react'

import { getRecentlyPlayed, getFeaturedPlaylists } from '@/services/requests'

/**
 * Custom hook for retrieving home page content.
 * @returns {Object} An object with a function `recentlyPlayed`.
 */
export const useHomeContent = () => {

  //Function to fetch recently played data.
  const recentlyPlayed = () => {
    const [recentlyPlayedData, setRecentlyPlayesDataData] = useState(null)

    useEffect(() => {
      const fetchRecentlyPlayed = async () => {
        const response = await getRecentlyPlayed()
        setRecentlyPlayesDataData(response)
      }
      fetchRecentlyPlayed()
    }, [])

    return { recentlyPlayedData }
  }

  //Function to fetch featured playlists.
  const featuredPlaylists = () => {
    const [featuredPlaylistsData, setFeaturedPlaylistsData] = useState(null)

    useEffect(() => {
      const fetchFeaturedPlaylists = async () => {
        const response = await getFeaturedPlaylists()
        setFeaturedPlaylistsData(response)
      }
      fetchFeaturedPlaylists()
    }, [])

    return { featuredPlaylistsData }
  }

  return { recentlyPlayed, featuredPlaylists }
}
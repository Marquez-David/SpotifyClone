import { useState, useEffect } from 'react'

import { getRecentlyPlayed } from '@/services/requests'

/**
 * Custom hook for retrieving home page content.
 * @returns {Object} An object with a function `recentlyPlayed`.
 */
export const useHomeContent = () => {

  //Function to fetch recently played data.
  const recentlyPlayed = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const fetchRecentlyPlayed = async () => {
        const response = await getRecentlyPlayed()
        setData(response)
      }
      fetchRecentlyPlayed()
    }, [])

    return { data }
  }

  return { recentlyPlayed }
}
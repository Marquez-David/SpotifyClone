import { useState, useEffect } from 'react'
import { getLibraryContent } from '@/services/requests'

/**
 * Fetches and provides data about saved content.
 * @returns {Object} - An object containing information about saved content.
 */
export const useLibraryContent = () => {
  const [library, setLibrary] = useState(null)

  useEffect(() => {
    const fetchLibraryContent = async () => {
      const response = await getLibraryContent()
      setLibrary(response)
    }

    fetchLibraryContent()
  }, [])

  return { library }
};
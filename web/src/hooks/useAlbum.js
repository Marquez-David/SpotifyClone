import { useState, useEffect } from "react"

import { getAlbum } from "@/services/requests"

export const useAlbum = () => {

  //Function to fetch an specific album
  const album = (id) => {
    const [albumData, setAlbumData] = useState(null)

    useEffect(() => {
      const fetchAlbum = async () => {
        const response = await getAlbum(id)
        setAlbumData(response)
      }
      fetchAlbum()
    }, [])

    return { albumData }
  }

  return { album }
}
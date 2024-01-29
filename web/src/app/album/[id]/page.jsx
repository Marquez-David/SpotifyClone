'use client'

import { useAlbum } from "@/hooks/useAlbum"

import AlbumHeader from "@/components/Headers/AlbumHeader"

const Album = ({ params }) => {
  const { albumData } = useAlbum().album(params.id)
  return (
    <div className="bg-background-base relative flex flex-col h-full overflow-x-hidden">
      {albumData && <AlbumHeader album={albumData} />}
    </div>
  )
}

export default Album
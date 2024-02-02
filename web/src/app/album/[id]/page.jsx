'use client'

import { useAlbum } from "@/hooks/useAlbum"

import AlbumHeader from "@/components/Headers/AlbumHeader"
import AlbumTable from "@/components/Tables/AlbumTable"

const Album = ({ params }) => {
  const { albumData } = useAlbum().album(params.id)
  console.log(albumData)
  return (
    <div className="bg-background-base relative flex flex-col h-full overflow-x-hidden">
      {albumData &&
        <>
          <AlbumHeader album={albumData} />
          <AlbumTable tracks={albumData.tracks.items} />
        </>
      }
    </div>
  )
}

export default Album
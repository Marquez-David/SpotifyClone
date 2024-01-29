import Image from "next/image"
import { extractArtistNames, capitalizeFirstLetter, getYear, calculateDuration } from "@/utils/helpers"

const AlbumHeader = ({ album }) => (
  <header className="flex flex-row gap-8 px-6 mt-12">
    <picture className="aspect-square w-52 h-52 flex-none">
      <Image src={album.images[0].url} height={album.images[0].height} width={album.images[0].width} alt={`Cover of ${album.id}`} className="object-cover w-full h-full shadow-lg" />
    </picture>

    <div className="flex flex-col justify-between">
      <h2 className="flex flex-1 items-end">{capitalizeFirstLetter(album.album_type)}</h2>
      <div> <h1 className="text-8xl font-bold block text-white"> {album.name}</h1> </div>

      <div className="flex-1 flex items-end">
        <div className="text-sm text-white font-bold">
          <span>{extractArtistNames(album.artists)}</span>
        </div>
        <p className="mt-1 ml-1">
          <span className="text-sm text-white font-light"> {`• ${getYear(album.release_date)} • ${album.total_tracks} song/s, ${calculateDuration(album.tracks.items)}`} </span>
        </p>
      </div>
    </div>
  </header >
)

export default AlbumHeader
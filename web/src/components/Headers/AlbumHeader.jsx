import Image from "next/image"
import { extractArtistNames, capitalizeFirstLetter, getYear, calculateDuration } from "@/utils/helpers"

const AlbumHeader = ({ album }) => (
  <header className="flex flex-row gap-8 px-6 mt-12">
    <picture className="aspect-square w-52 h-52 flex-none">
      <Image src={album.images[0].url} height={album.images[0].height} width={album.images[0].width} alt={`Cover of ${album.id}`} className="object-cover w-full h-full shadow-lg" />
    </picture>

    <div className="flex flex-col justify-between">
      <h2 className="flex flex-1 items-end">{capitalizeFirstLetter(album.album_type)}</h2>
      <div> <h1 className="text-8xl font-bold text-white"> {album.name}</h1> </div>

      <div className="flex-1 flex items-end">
        <p className="text-white text-sm space-x-2">
          <span className="font-bold">{extractArtistNames(album.artists)}</span>
          <span className="font-light"> {getYear(album.release_date)} </span>
          <span className="font-light"> {`${album.total_tracks} song/s`} </span>
          <span className="font-light"> {calculateDuration(album.tracks.items)} </span>
        </p>
      </div>
    </div>
  </header>
)

export default AlbumHeader
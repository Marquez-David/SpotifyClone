import Image from "next/image"

const TrackCard = ({ track }) => (
  <a href={track.album.id} className="track-item h-16 w-auto overflow-hidden gap-5 rounded-md bg-background-elevated-base hover:bg-background-elevated-highlight flex items-center">
    <picture className="w-auto h-full">
      <Image src={track.album.images[0].url} height={track.album.images[0].height || 300} width={track.album.images[0].width || 300} alt={`Cover image of ${track.name}`} className="object-cover w-full h-full" />
    </picture>
    <div className="">
      <h1 className="text-white text-ms font-bold"> {track.name}</h1>
    </div>
  </a>
)

export default TrackCard
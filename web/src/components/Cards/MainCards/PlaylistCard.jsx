import Image from "next/image"

const PlaylistCard = ({ playlist }) => (
  <a href={playlist.id} className="playlist-item transition-all duration-300 flex relative rounded-md overflow-hidden gap-5 shadow-lg bg-background-elevated-base my-2 hover:bg-background-elevated-highlight w-44 py-4 pb-10 px-2 flex-col">
    <picture className="aspect-square w-full h-auto flex-none">
      <Image src={playlist.images[0].url} height={playlist.images[0].height || 300} width={playlist.images[0].width || 300} alt={`Cover image of ${playlist.id}`} className="object-cover w-full h-full rounded-md" />
    </picture>
    <div className="flex flex-auto flex-col items-start">
      <h1 className="text-white text-ms font-bold overflow-wrap"> {playlist.name} </h1>
      <span className="text-gray">{`By ${playlist.owner.display_name}`}</span>
    </div>
  </a>
)

export default PlaylistCard
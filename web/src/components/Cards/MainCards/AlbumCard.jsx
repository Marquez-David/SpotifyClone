
const AlbumCard = ({ album }) => (
  <a href={album.href} className="playlist-item transition-all duration-300 flex relative rounded-md overflow-hidden gap-5 shadow-lg bg-background-elevated-base my-2 hover:bg-background-elevated-highlight w-44 py-4 pb-10 px-2 flex-col">
    <picture className="aspect-square w-full h-auto flex-none">
      <img src={album.cover} alt={`Cover image of ${album.title}`} className="object-cover w-full h-full rounded-md" />
    </picture>
    <div className="flex flex-auto flex-col items-start">
      <h1 className="text-white text-ms font-bold overflow-wrap"> {album.title} </h1>
      <span className="text-gray">{`By ${album.owner}`}</span>
    </div>
  </a>
)

export default AlbumCard;
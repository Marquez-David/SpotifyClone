const TrackCard = ({ track }) => (
  <a href={track.album.href} className="track-item h-20 w-auto overflow-hidden gap-5 rounded-md bg-background-elevated-base hover:bg-background-elevated-highlight flex items-center">
    <picture className="w-auto h-full">
      <img src={track.album.cover} alt={`Cover image of ${track.title}`} className="object-cover w-full h-full" />
    </picture>
    <div className="">
      <h1 className="text-white text-ms font-bold"> {track.title}</h1>
    </div>
  </a>
);

export default TrackCard;
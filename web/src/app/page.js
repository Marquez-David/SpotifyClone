
import PlaylistCard from "@/components/Cards/MainCards/PlaylistCard.jsx";
import AlbumCard from "@/components/Cards/MainCards/AlbumCard.jsx";
import TrackCard from "@/components/Cards/MainCards/TrackCard.jsx";

import { featuredPlaylists } from "@/lib/featured-playlists";
import { featuredAlbums } from "@/lib/featured-albums";
import { recentlyPlayed } from "@/lib/recently-played";

import { homeStrings } from "@/utils/strings";

export default function Home() {
  return (
    <div id="playlist-container" className="h-full transition-all duration-1000 relative z-10 px-6 pt-10 overflow-y-auto">
      <h1 className="font-bold text-lg">{homeStrings.featuredPlaylists}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-2">
        {recentlyPlayed.map((track) => <TrackCard key={track.id} track={track} />)}
      </div>

      <h1 className="font-bold text-lg">{homeStrings.featuredPlaylists}</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {
          featuredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        }
      </div>

      <h1 className="font-bold text-lg">{homeStrings.featuredAlbums}</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {featuredAlbums.map((album) => <AlbumCard key={album.id} album={album} />)}
      </div>
    </div>
  )
}

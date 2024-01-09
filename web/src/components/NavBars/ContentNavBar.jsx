import LibraryButton from "../Buttons/LibraryButton"
import SideCard from "@/components/Cards/SideCard/SideCard.jsx"

import { albums } from "@/lib/albums"
import { playlists } from "@/lib/playlists"
import { artists } from "@/lib/artists"

const ContentNavBar = () => (
  <nav className="flex flex-col rounded-lg h-screen overflow-hidden">
    <ul><LibraryButton /></ul>
    <div className="bg-background-base px-2 overflow-y-auto">
      <ul>
        {playlists.map((playlist) => <SideCard key={playlist.id} item={playlist} />)}
        {albums.map((album) => <SideCard key={album.id} item={album} />)}
        {artists.map((artist) => <SideCard key={artist.id} item={artist} />)}
      </ul>
    </div>
  </nav>
);

export default ContentNavBar;
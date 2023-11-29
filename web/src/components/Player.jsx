import PlaySongIcon from "@/assets/icons/PlaySong.jsx";
import PauseSongIcon from "@/assets/icons/PlaySong.jsx";
import { usePlayerStore } from "@/store/PlayerStore.js";

const Player = () => {
  const { currentSong } = usePlayerStore(state => state);
  return (
    <div className="flex items-center overflow-hidden w-full h-full">
      <picture className="w-16 h-16 rounded-md shadow-lg mx-2 overflow-hidden">
        <img className="object-cover w-full h-full" src={currentSong.image} alt={currentSong.title} />
      </picture>

      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">
          {currentSong.title}
        </h3>
        <span className="text-xs opacity-80">
          {currentSong.artists}
        </span>
      </div>
    </div>

  )
}

export default Player;
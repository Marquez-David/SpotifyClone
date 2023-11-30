import { Play } from "@/assets/icons/PlaySong.jsx";
import { Shuffle } from "@/assets/icons/Shuffle.jsx"
import { PreviousSong } from '@/assets/icons/PreviousSong.jsx';
import { NextSong } from "@/assets/icons/NextSong";
import { RepeatSong } from "@/assets/icons/RepeatSong";
import { ViewSong } from "@/assets/icons/ViewSong";
import { Queue } from "@/assets/icons/Queue";
import { Devices } from "@/assets/icons/Devices";
import { Volume } from "@/assets/icons/Volume";


import { usePlayerStore } from "@/store/PlayerStore.js";

const Player = () => {
  const { currentSong } = usePlayerStore(state => state);
  return (
    <div className="flex items-center overflow-hidden w-full h-full">
      <picture className="w-16 h-16 rounded-md shadow-lg mx-2 overflow-hidden">
        <img className="object-cover w-full h-full" src={currentSong.image} alt={currentSong.title} />
      </picture>

      <div className="flex flex-col w-1/4">
        <h3 className="font-semibold text-sm block">
          {currentSong.title}
        </h3>
        <span className="text-xs opacity-80">
          {currentSong.artists}
        </span>
      </div>

      <div className="flex justify-center items-center place-content-center flex-1 p-2 w-1/3">
        <button className="p-2"><Shuffle /></button>
        <button className="p-2"><PreviousSong /></button>
        <button className="p-2"><Play /></button>
        <button className="p-2"><NextSong /></button>
        <button className="p-2"><RepeatSong /></button>
      </div>

      <div className="flex justify-end items-center place-content-center flex-1 p-2 w-1/3">
        <button className="p-2"><ViewSong /></button>
        <button className="p-2"><Queue /></button>
        <button className="p-2"><Devices /></button>
        <button className="p-2"><Volume /></button>
      </div>

    </div>

  )
}

export default Player;
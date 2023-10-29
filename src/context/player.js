import { createContext } from 'react'
import SongPlayer from '../components/SongPlayer';
import { useSongPlayer } from '../hooks/useSongPlayer';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const { player, play, pause, playSong } = useSongPlayer();

  return (
    <PlayerContext.Provider value={{ player, play, pause, playSong }}>
      {children}
      <SongPlayer visible={player.visible} type={player.type} item={player.queue[0]} />
    </PlayerContext.Provider>
  )
};
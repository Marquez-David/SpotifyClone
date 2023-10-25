import { createContext } from 'react'
import SongPlayer from '../components/SongPlayer';
import { useSongPlayer } from '../hooks/useSongPlayer';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const { player, setPlayer, play, pause } = useSongPlayer();

  return (
    <PlayerContext.Provider value={{ player, setPlayer, play, pause }}>
      {children}
      <SongPlayer visible={player.visible} type={player.type} item={player.item} />
    </PlayerContext.Provider>
  )
};
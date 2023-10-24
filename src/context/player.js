import { createContext } from 'react'
import SongPlayer from '../components/SongPlayer';
import { usePlayer } from '../hooks/usePlayer';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const { player, openPlayer } = usePlayer();

  return (
    <PlayerContext.Provider value={{ player, openPlayer }}>
      {children}
      <SongPlayer visible={player.visible} item={player.item} />
    </PlayerContext.Provider>
  )
};
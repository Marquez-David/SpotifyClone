import { createContext } from 'react'
import SongPlayer from '../components/SongPlayer';
import { useSongPlayer } from '../hooks/useSongPlayer';

export const PlayerContext = createContext();

/**
 * Provides the player-related context to its children.
 * Also renders the SongPlayer component based on player visibility and state.
 * @param {Object} children - The child components to be wrapped with the player context.
 */
export const PlayerProvider = ({ children }) => {
  const { player, play, pause, song, shuffle } = useSongPlayer();

  return (
    <PlayerContext.Provider value={{ player, play, pause, song, shuffle }}>
      {children}
      <SongPlayer visible={player.visible} state={player.state} item={player.currentSong} />
    </PlayerContext.Provider>
  )
};
import { createContext } from 'react'
import Player from '../components/Player';
import { usePlayer } from '../hooks/usePlayer';

export const PlayerContext = createContext();

/**
 * Provides the player-related context to its children.
 * Also renders the Player component based on player visibility and state.
 * @param {Object} children - The child components to be wrapped with the player context.
 */
export const PlayerProvider = ({ children }) => {
  const { player, play, pause, song, episode, playQueue } = usePlayer();

  return (
    <PlayerContext.Provider value={{ player, play, pause, song, episode, playQueue }}>
      {children}
      <Player progress={player.progress} state={player.state} item={player.currentSong} />
    </PlayerContext.Provider>
  )
};
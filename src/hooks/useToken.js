import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Custom hook that retrieves and manages the Spotify access token stored in AsyncStorage.
 * The hook checks if the token is present and has not expired.
 * @returns {Object} - An object containing the Spotify access token (or null if not present or expired).
 */
export const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = await AsyncStorage.getItem("spotifyToken");
      const expirationDate = await AsyncStorage.getItem("tokenExpirationDate");

      if (accessToken) {
        console.log(accessToken);
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          setToken(accessToken);
        } else {
          AsyncStorage.removeItem("spotifyToken");
          AsyncStorage.removeItem("tokenExpirationDate");
          setToken(null);
        }
      } else {
        setToken(null);
      }
    };
    checkToken();
  }, []);

  return { token };
};
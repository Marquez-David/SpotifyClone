import { useEffect, useState } from 'react';
import { spotifyAuthConfig } from '../utils/constants';
import { refresh } from 'react-native-app-auth';
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
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      const expirationDate = await AsyncStorage.getItem("tokenExpirationDate");

      if (accessToken) {
        console.log(accessToken);
        const currentTime = Date.now();
        if (currentTime < parseInt(expirationDate)) {
          setToken(accessToken);
        } else {
          try {
            const result = await refresh(spotifyAuthConfig, { refreshToken: refreshToken });
            const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
            await AsyncStorage.setItem('spotifyToken', result.accessToken);
            await AsyncStorage.setItem('refreshToken', result.refreshToken);
            await AsyncStorage.setItem('tokenExpirationDate', expirationDate.toString());
            setToken(result.accessToken);
          } catch (error) {
            setToken('');
          }
        }
      } else {
        setToken('');
      }
    };
    checkToken();
  }, []);

  return { token };
};
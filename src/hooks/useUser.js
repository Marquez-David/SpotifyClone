import { getUserInfo } from '../services/requests';
import { useQuery } from '@tanstack/react-query';

/**
 * A custom hook that fetches user information using the getUserInfo function.
 * @returns {Object} - An object containing user-related data, including user information and user image.
 */
export const useUser = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserInfo(),
  });

  return {
    isLoadingUser: isLoading,
    user: data,
    image: data?.images[0].url
  };
};
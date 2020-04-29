import { useEffect, useState } from 'react';
import UserService, { User } from './UserService';

interface useCurrentUserInstance {
  data: User | undefined;
  error: boolean;
  loading: boolean;
}

export const useCurrentUser = (): useCurrentUserInstance => {

  const [data, setData] = useState<User>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    UserService.current()
      .then((response) => setData(response.data))
      .catch(e => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    error,
    loading,
  };
};
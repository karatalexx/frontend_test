import { useEffect, useState } from 'react';
import UserService, { User } from './UserService';

interface useUsersInstance {
  data: User[];
  error: boolean;
  loading: boolean;
}

export const useUsers = (): useUsersInstance => {

  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    UserService.users()
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
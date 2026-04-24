import { useQuery } from '@tanstack/vue-query';
import { getUsers } from 'src/shared/api/users';

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};

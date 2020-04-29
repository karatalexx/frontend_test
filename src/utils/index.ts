import { User } from 'services/UserService';

export const getFullName = (user: User) => `${user.first_name} ${user.last_name}`;

export const sortReverse = (a: User, b: User) => {
  if (getFullName(a) < getFullName(b)) {
    return 1;
  }
  if (getFullName(a) > getFullName(b)) {
    return -1;
  }
  return 0;
};
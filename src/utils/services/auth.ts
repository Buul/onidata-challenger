import { User } from '@/flux/modules/sigIn/types';

export const TOKEN_KEY = 'TOKEN';
export const USER_KEY = 'USER';

export const isAuthenticated = () => !!localStorage.getItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export const setUser = (user: User) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));

export const getUser = (): User | null => {
  const userStorage = localStorage.getItem(USER_KEY);
  if (userStorage) {
    return JSON.parse(userStorage);
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

import Cookies from 'js-cookie';
import { User } from '../types';

const AUTH_TOKEN_KEY = 'jelai_auth_token';
const USER_KEY = 'jelai_user';

export const authUtils = {
  setAuthToken: (token: string) => {
    Cookies.set(AUTH_TOKEN_KEY, token, { expires: 7 });
  },

  getAuthToken: (): string | undefined => {
    return Cookies.get(AUTH_TOKEN_KEY);
  },

  removeAuthToken: () => {
    Cookies.remove(AUTH_TOKEN_KEY);
    Cookies.remove(USER_KEY);
  },

  setUser: (user: User) => {
    Cookies.set(USER_KEY, JSON.stringify(user), { expires: 7 });
  },

  getUser: (): User | null => {
    const userStr = Cookies.get(USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated: (): boolean => {
    return !!authUtils.getAuthToken();
  },

  isAdmin: (): boolean => {
    const user = authUtils.getUser();
    return user?.isAdmin || false;
  }
};
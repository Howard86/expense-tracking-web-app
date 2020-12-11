import cookies from 'js-cookie';
import type { UserData } from './mapUserData';

export const getUserFromCookie = (): UserData | null => {
  const cookie = cookies.get('auth');

  return cookie ? JSON.parse(cookie) : null;
};

export const setUserCookie = (user: UserData): void => {
  cookies.set('auth', user, {
    expires: 1 / 24,
  });
};

export const removeUserCookie = (): void => cookies.remove('auth');

import type firebase from 'firebase';
import cookies from 'js-cookie';
import { UserData } from './slice';

export const mapUserData = async (user: firebase.User): Promise<UserData> => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};

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

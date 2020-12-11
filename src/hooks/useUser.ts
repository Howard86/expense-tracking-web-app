import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import mapUserData, { UserData } from '@/utils/mapUserData';
import initFirebase from '@/utils/firebase';
import {
  setUserCookie,
  removeUserCookie,
  getUserFromCookie,
} from '@/utils/cookies';

interface UseUser {
  user: UserData | null;
  logout: () => void;
}

const useUser = (): UseUser => {
  const [user, setUser] = useState<UserData>(null);
  const router = useRouter();

  const logout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => router.push('/auth'))
      .catch(console.error);

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    initFirebase();
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const userData = await mapUserData(user);
          setUserCookie(userData);
          setUser(userData);
        } else {
          removeUserCookie();
          setUser(null);
        }
      });

    const userFromCookie = getUserFromCookie();

    if (!userFromCookie) {
      router.push('/');
    } else {
      setUser(userFromCookie);
    }

    return cancelAuthListener;
  }, []);

  return { user, logout };
};

export default useUser;

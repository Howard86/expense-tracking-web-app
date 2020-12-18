import { useEffect } from 'react';
import firebase, { initFirebase } from '@/redux/firebase';
import { login, logout } from '@/redux/user';
import { useAppDispatch } from '@/redux/store';

const useUserListener = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initFirebase();
    const cancelAuthListener = firebase.auth().onIdTokenChanged((user) => {
      dispatch(user ? login(user) : logout());
    });

    return cancelAuthListener;
  }, []);
};

export default useUserListener;

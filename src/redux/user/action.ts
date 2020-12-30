import type { AppThunk } from '../store';
import type firebase from '../firebase';
import { signOut } from '../firebase';
import fetcher from './fetcher';
import { setLogin, setLogout } from './slice';
import { mapUserData, removeUserCookie, setUserCookie } from './util';

export const login = (user: firebase.User): AppThunk => async (
  dispatch,
  getState,
) => {
  const { user: original } = getState();

  try {
    const userData = await mapUserData(user);
    if (original.userData?.token !== userData.token) {
      await fetcher('auth', userData.token);
      setUserCookie(userData);
      dispatch(setLogin(userData));
    }
  } catch (error) {
    console.error(error);
    dispatch(setLogout());
  }
};

export const logout = (): AppThunk => async (dispatch) => {
  await signOut();
  removeUserCookie();
  dispatch(setLogout());
};

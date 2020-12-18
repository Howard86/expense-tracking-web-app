import type { AppThunk } from '../store';
import firebase from '../firebase';
import fetcher from './fetcher';
import { actions } from './slice';
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
      dispatch(actions.login(userData));
    }
  } catch (error) {
    console.error(error);
    dispatch(actions.logout());
  }
};

export const logout = (): AppThunk => async (dispatch) => {
  await firebase.auth().signOut();
  removeUserCookie();
  dispatch(actions.logout());
};

import type firebase from 'firebase';

export interface UserData {
  id: string;
  email: string;
  token: string;
}

const mapUserData = async (user: firebase.User): Promise<UserData> => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};

export default mapUserData;

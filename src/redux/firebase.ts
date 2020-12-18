import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export type CollectionType = 'expense';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export const initFirebase = (): void => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
  }
};

export const getCollection = (
  username: string,
  collectionType: CollectionType,
): firebase.firestore.CollectionReference =>
  firebase.firestore().collection(`users/${username}/${collectionType}`);

export default firebase;

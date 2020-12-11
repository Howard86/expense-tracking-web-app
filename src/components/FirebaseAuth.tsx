import React, { FC } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import type { auth } from 'firebaseui';
import initFirebase from '@/utils/firebase';

initFirebase();

const firebaseAuthConfig: auth.Config = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
};

const FirebaseAuth: FC = () => {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default FirebaseAuth;

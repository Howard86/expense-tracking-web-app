import React, { FC } from 'react';
import dynamic from 'next/dynamic';

const FirebaseAuth = dynamic(() => import('@/components/FirebaseAuth'), {
  ssr: false,
});

const Auth: FC = () => {
  return (
    <div>
      <p>Sign in</p>
      <div>
        <FirebaseAuth />
      </div>
    </div>
  );
};

export default Auth;

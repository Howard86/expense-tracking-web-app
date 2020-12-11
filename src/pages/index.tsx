import React, { FC } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import useUser from '@/hooks/useUser';
import type { AuthResponse } from './api/auth';

const fetcher = (endpoint: string, token: string) =>
  fetch(`/api/${endpoint}`, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Home: FC = () => {
  const { user, logout } = useUser();
  const { data, error } = useSWR<AuthResponse>(
    user ? ['auth', user.token] : null,
    fetcher,
    { errorRetryCount: 1 },
  );

  if (!user) {
    return (
      <div>
        <p>Hi there!</p>
        <p>
          You are not signed in.{' '}
          <Link href="/auth">
            <a>Sign in</a>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>You&apos;re signed in. Email: {user.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      {error && <div>Failed to fetch auth status!</div>}
      {data && !error ? (
        <div>Your status is {data.status}.</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;

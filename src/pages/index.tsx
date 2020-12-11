import React, { FC, SyntheticEvent, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import useUser from '@/hooks/useUser';
import firebase from '@/utils/firebase';
import type { AuthResponse } from './api/auth';

const fetcher = (endpoint: string, token: string) =>
  fetch(`/api/${endpoint}`, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Home: FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const { user, logout } = useUser();
  const { data, error } = useSWR<AuthResponse>(
    user ? ['auth', user.token] : null,
    fetcher,
    { errorRetryCount: 1 },
  );

  const handleOnSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    firebase.firestore().collection('expense').add({
      name,
      price,
    });

    alert('success');
  };

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
        <>
          <div>Your status is {data.status}.</div>
          <form>
            <div>
              Name
              <br />
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              Price
              <br />
              <input
                type="number"
                value={price}
                min="0"
                onChange={(event) => setPrice(event.target.valueAsNumber)}
              />
            </div>
            <button type="submit" onClick={handleOnSubmit}>
              Save
            </button>
          </form>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;

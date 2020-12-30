import React, { FC, SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import firebase from '@/redux/firebase';
import { selectUser, logout } from '@/redux/user';
import { useAppDispatch } from '@/redux/store';

const Home: FC = () => {
  const { userData } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleOnSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    firebase.firestore().collection('expense').add({
      name,
      price,
    });

    alert('success');
  };

  if (!userData) {
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
        <p>You&apos;re signed in. Email: {userData.email}</p>
        <p
          style={{
            display: 'inline-block',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(logout())}
        >
          Log out
        </p>
      </div>
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
    </div>
  );
};

export default Home;

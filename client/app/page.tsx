import './app.css';
import { Key } from 'react';
import client from './../apolloClient';
import allUsersQuery from '@/queries/getAllUsers';
import ModalController from '@/components/ModalController';
// graphql-users

export default async function Home() {
  const users: {
    name: String;
    id: Key;
    age: Number;
    company: { name: String };
  }[] = await client
    .query(allUsersQuery)
    .then((res) => res.data.users);

  return (
    <main>
      <ModalController users={users} />
    </main>
  );
}

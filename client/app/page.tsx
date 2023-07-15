import { Key } from 'react';
import client from './../apolloClient';
import allUsersQuery from '@/queries/getAllUsers';

export default async function Home() {
  const users: { name: String; id: Key }[] = await client
    .query(allUsersQuery)
    .then((res) => res.data.users);

  return (
    <main>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </main>
  );
}

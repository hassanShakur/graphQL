import './app.css';
import { Key } from 'react';
import client from './../apolloClient';
import allUsersQuery from '@/queries/getAllUsers';
import ModalController from '@/components/ModalController';
// graphql-users



export default async function Home() {
  

  return (
    <main>
      <ModalController />
    </main>
  );
}

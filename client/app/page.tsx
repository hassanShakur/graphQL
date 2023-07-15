// import { Key } from 'react';
// import client from './../apolloClient';
// import allUsersQuery from '@/queries/getAllUsers';
import { useState } from 'react';
import './app.css';
import Menu from '@/components/Menu';
import CreateUser from '@/components/CreateUser';
// graphql-users

export default async function Home() {
  return (
    <main>
      <Menu />
      <section className='users'>
        <div className='user'>
          <div className='name'>
            <span></span>
            <span>yuqee chen</span>
          </div>
          <div className='info'>
            <span>age: 18</span>
            <span>netflix</span>
          </div>
        </div>
        <div className='user'>
          <div className='name'>
            <span></span>
            <span>yuqee chen</span>
          </div>
          <div className='info'>
            <span>age: 18</span>
            <span>netflix</span>
          </div>
        </div>
        <div className='user'>
          <div className='name'>
            <span></span>
            <span>yuqee chen</span>
          </div>
          <div className='info'>
            <span>age: 18</span>
            <span>netflix</span>
          </div>
        </div>
      </section>
      <CreateUser />
    </main>
  );
}

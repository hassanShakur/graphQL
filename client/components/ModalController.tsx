'use client';
import { Fragment, useCallback, useEffect, useState } from 'react';
import Menu from './Menu';
import { Key } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Notification from './Notification';
import client from './../apolloClient';
import allUsersQuery from '@/queries/getAllUsers';

type Users = {
  name: String;
  id: Key;
  age: Number;
  company: { name: String };
}[];

const ModalController = () => {
  const users: Users = [];
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [allUsers, setAllUsers] = useState(users);

  const toggleModals = () => {
    setFormIsOpen(() => false);
    setMenuIsOpen(() => false);
  };

  const fetchUsers = useCallback(async () => {
    const newUsers: Users = await client
      .query(allUsersQuery)
      .then((res) => res.data.users);
    setAllUsers(newUsers);
  }, []);

  useEffect(() => {
    fetchUsers();
    console.log('called');
  }, [fetchUsers]);

  return (
    <Fragment>
      <div
        className={`backdrop ${
          !formIsOpen && !menuIsOpen && 'hide-backdrop'
        }`}
        onClick={toggleModals}
      ></div>

      <Menu
        className={menuIsOpen ? '' : 'hide-menu'}
        setMenuIsOpen={setMenuIsOpen}
      />
      <CreateUser
        className={!formIsOpen ? 'hide-form' : ''}
        setFormIsOpen={setFormIsOpen}
        setNotification={setNotification}
      />
      <UserList users={allUsers} setFormIsOpen={setFormIsOpen} />
      <Notification message={notification} />
    </Fragment>
  );
};

export default ModalController;

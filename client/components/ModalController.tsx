'use client';
import { Fragment, MouseEventHandler, useState } from 'react';
import Menu from './Menu';
import { Key } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Notification from './Notification';

interface Props {
  users: {
    name: String;
    id: Key;
    age: Number;
    company: {
      name: String;
    };
  }[];
}

const ModalController = ({ users }: Props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [notification, setNotification] = useState('')

  const toggleModals = () => {
    setFormIsOpen(() => false);
    setMenuIsOpen(() => false);
  };

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
      <UserList users={users} setFormIsOpen={setFormIsOpen} />
      <Notification message={notification} />
    </Fragment>
  );
};

export default ModalController;

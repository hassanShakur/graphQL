'use client';

import { useState } from 'react';
import Menu from './Menu';
import CreateUser from './CreateUser';

const ModalController = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleModals = () => {
    setFormIsOpen(() => false);
    setMenuIsOpen(() => false);
  };

  return (
    <>
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
      />
    </>
  );
};

export default ModalController;

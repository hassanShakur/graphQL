'use client';

import { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav onClick={toggleMenu}>menu</nav>
      <section className={`companies ${!menuOpen && 'menu-close'}`}>
        <div className='company'>
          <div className='logo'>Logo</div>
          <div className='info'>
            <span className='company-id'>ID: 1</span>
            <span className='company-users'>Users 10</span>
          </div>
        </div>
        <div className='company'>
          <div className='logo'>Logo</div>
          <div className='info'>
            <span className='company-id'>ID: 1</span>
            <span className='company-users'>Users 10</span>
          </div>
        </div>
        <div className='company'>
          <div className='logo'>Logo</div>
          <div className='info'>
            <span className='company-id'>ID: 1</span>
            <span className='company-users'>Users 10</span>
          </div>
        </div>
        <div className='company'>
          <div className='logo'>Logo</div>
          <div className='info'>
            <span className='company-id'>ID: 1</span>
            <span className='company-users'>Users 10</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

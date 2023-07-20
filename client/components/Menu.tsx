'use client';

import { MenuProps } from '@/helpers/propTypes';

const Menu = ({ className, setMenuIsOpen }: MenuProps) => {
  return (
    <>
      <nav onClick={() => setMenuIsOpen((prevState) => !prevState)}>
        menu
      </nav>
      <section className={`companies ${className}`}>
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

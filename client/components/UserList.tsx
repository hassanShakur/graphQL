import DeleteUserBtn from './DeleteUserBtn';
import { AiOutlineAmazon } from 'react-icons/ai';
import { TbDiscountCheck, TbBrandNetflix } from 'react-icons/tb';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { IoPersonAdd } from 'react-icons/io5';

import { UserListProps } from '@/helpers/propTypes';

const CompanyIcons = {
  Apple: <BsApple className='icon' />,
  Google: <FcGoogle className='icon' />,
  Amazon: <AiOutlineAmazon className='icon' />,
  Netflix: <TbBrandNetflix className='icon' />,
};

const UserList = ({
  users,
  setFormIsOpen,
  setAllUsers,
}: UserListProps) => {
  return (
    <section className='users'>
      {users.map(({ id, name, age, company }) => (
        <div key={id} className='user'>
          <div className='name'>
            <span>{name}</span>
          </div>
          <div className='info'>
            <span>
              <TbDiscountCheck className='icon' />{' '}
              {`${age.toString()} yrs`}
            </span>
            <span>
              {CompanyIcons[company.name]}
              {company.name}
            </span>
          </div>
          <DeleteUserBtn id={id} setAllUsers={setAllUsers} />
        </div>
      ))}
      <button
        className='new-user-btn'
        type='button'
        onClick={() => setFormIsOpen(() => true)}
      >
        <IoPersonAdd className='icon' />
      </button>
    </section>
  );
};

export default UserList;

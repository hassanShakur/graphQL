import { Dispatch, SetStateAction } from 'react';
import { Key } from 'react';
import DeleteUserBtn from './DeleteUserBtn';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineAmazon } from 'react-icons/ai';
import { TbDiscountCheck, TbBrandNetflix } from 'react-icons/tb';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { IoPersonAdd } from 'react-icons/io5';

interface Props {
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
  users: {
    name: String;
    id: Key;
    age: Number;
    company: {
      name: String;
    };
  }[];
}

const CompanyIcons = {
  Apple: <BsApple className='icon' />,
  Google: <FcGoogle className='icon' />,
  Amazon: <AiOutlineAmazon className='icon' />,
  Netflix: <TbBrandNetflix className='icon' />,
};

const UserList = ({ users, setFormIsOpen }: Props) => {
  return (
    <section className='users'>
      {users.map(({ id, name, age, company }) => (
        <div key={id} className='user'>
          <div className='name'>
            {/* <BiUserCircle className='icon' /> */}
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
          <DeleteUserBtn id={id} />
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

import DeleteUserBtn from './DeleteUserBtn';
import { AiOutlineAmazon } from 'react-icons/ai';
import { TbDiscountCheck, TbBrandNetflix } from 'react-icons/tb';
import { BsApple } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { IoPersonAdd } from 'react-icons/io5';
import allUsersQuery from '@/queries/getAllUsers';

import { UserListProps } from '@/helpers/propTypes';
import { useQuery } from '@apollo/client';

const CompanyIcons = {
  Apple: <BsApple className='icon' />,
  Google: <FcGoogle className='icon' />,
  Amazon: <AiOutlineAmazon className='icon' />,
  Netflix: <TbBrandNetflix className='icon' />,
};

const UserList = () => {
  // const { data, loading, error } = useQuery(allUsersQuery.query);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error.</div>;

  // console.log(data);

  return (
    <section className='users'>
      {/* {users.map(({ id, name, age, company }) => (
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
      ))} */}
      {/* <button
        className='new-user-btn'
        type='button'
        onClick={() => setFormIsOpen(() => true)}
      > */}
      {/* <IoPersonAdd className='icon' />
      </button> */}
    </section>
  );
};

export default UserList;

import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { Key } from 'react';
import DeleteUserBtn from './DeleteUserBtn';

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

const UserList = ({ users, setFormIsOpen }: Props) => {
  return (
    <section className='users'>
      {users.map(({ id, name, age, company }) => (
        <div key={id} className='user'>
          <div className='name'>
            <span></span>
            <span>{name}</span>
          </div>
          <div className='info'>
            <span>age {age.toString()}</span>
            <span>{company.name}</span>
          </div>
          <DeleteUserBtn id={id}/>
        </div>
      ))}
      <button
        className='new-user-btn'
        type='button'
        onClick={() => setFormIsOpen(() => true)}
      >
        new
      </button>
    </section>
  );
};

export default UserList;

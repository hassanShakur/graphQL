import { MouseEventHandler } from 'react';
import { Key } from 'react';

interface Props {
  onUserClick: MouseEventHandler<HTMLDivElement>;
  users: {
    name: String;
    id: Key;
    age: Number;
    company: {
      name: String;
    };
  }[];
}

const UserList = ({ onUserClick, users }: Props) => {
  return (
    <section className='users'>
      {users.map((user) => (
        <div key={user.id} className='user' onClick={onUserClick}>
          <div className='name'>
            <span></span>
            <span>{user.name}</span>
          </div>
          <div className='info'>
            <span>age {user.age.toString()}</span>
            <span>{user.company.name}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserList;

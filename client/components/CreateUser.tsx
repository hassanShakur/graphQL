'use client';

import { useMutation } from '@apollo/client';
import createUser from '@/queries/createUser';
import client from '@/apolloClient';
import allUsersQuery from '@/queries/getAllUsers';
import React, {
  FormEvent,
  useEffect,
  useState,
} from 'react';

import { CreateUserProps } from '@/helpers/propTypes';

const CreateUser = ({
  className,
  setFormIsOpen,
  setNotification,
  setAllUsers,
}: CreateUserProps) => {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(0);
  const [companyInput, setCompanyInput] = useState('1');

  const newUser = {
    name: nameInput,
    age: ageInput,
    companyId: companyInput,
  };

  const [invokeCreateUser] = useMutation(createUser, {
    client,
    variables: newUser,
    refetchQueries: [{ query: allUsersQuery.query }],
  });

  useEffect(() => {
    let newUsers: any = [];
    async function fetcher() {
      newUsers = await client
        .query(allUsersQuery)
        .then((res) => res.data.users);

    }
    fetcher();

    setAllUsers(() => newUsers);
  }, [setAllUsers]);

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (nameInput.trim() === '' || ageInput === +'') {
      return setNotification(() => 'Invalid input!');
    }

    invokeCreateUser();

    setAllUsers((prev: any) => [
      ...prev,
      { ...newUser, company: { name: 'Netflix' } },
    ]);
    setNotification(() => 'User created successfuly!');
    setFormIsOpen(() => false);
  };

  return (
    <div className={`user-form ${className}`}>
      <h3>add new user</h3>
      <form onSubmit={formSubmitHandler}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Jane Doe'
          maxLength={13}
          value={nameInput}
          onChange={(e) => setNameInput(() => e.target.value)}
        />
        <input
          type='string'
          name='age'
          id='age'
          placeholder='Age'
          value={ageInput || ''}
          min={12}
          max={180}
          onChange={(e) => setAgeInput(() => +e.target.value)}
        />
        <select
          name='company'
          id='company'
          value={companyInput}
          onChange={(e) => setCompanyInput(() => e.target.value)}
        >
          <option value='1'>Amazon</option>
          <option value='2'>Apple</option>
          <option value='3'>Google</option>
          <option value='4'>Netflix</option>
        </select>
        <div className='buttons'>
          <button type='submit'>Submit</button>
          <button
            type='button'
            className='cancel'
            onClick={() => setFormIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

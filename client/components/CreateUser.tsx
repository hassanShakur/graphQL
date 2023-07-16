'use client';

import { useMutation } from '@apollo/client';
import createUser from '@/queries/createUser';
import client from '@/apolloClient';
import React, {
  Dispatch,
  FormEvent,
  Key,
  SetStateAction,
  useState,
} from 'react';

interface Props {
  className: String;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
}

type User = {
  name: String;
  id: Key;
}[];

type MapCompany = {
  amazon: String;
  apple: String;
  google: String;
  netflix: String;
};

const mapCompany: MapCompany = {
  amazon: '1',
  apple: '2',
  google: '3',
  netflix: '4',
};

const CreateUser = ({ className, setFormIsOpen }: Props) => {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState(0);
  const [companyInput, setCompanyInput] = useState('netflix');

  const [invokeUserMutate] = useMutation(createUser, {
    client,
    variables: {
      name: nameInput,
      age: ageInput,
      companyId: '1',
    },
  });

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    invokeUserMutate();
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
          type='text'
          name='company'
          id='company'
          placeholder='Netflix'
          value={companyInput}
          onChange={(e) => setCompanyInput(() => e.target.value)}
        />
        <input
          type='text'
          name='age'
          id='age'
          placeholder='Age'
          value={ageInput}
          onChange={(e) => setAgeInput(() => +e.target.value)}
        />
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

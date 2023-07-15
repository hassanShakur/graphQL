'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  className: String;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateUser = ({ className, setFormIsOpen }: Props) => {
  return (
    <div className={`user-form ${className}`}>
      <h3>add new user</h3>
      <form>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Jane Doe'
        />
        <input
          type='text'
          name='company'
          id='company'
          placeholder='Netflix'
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

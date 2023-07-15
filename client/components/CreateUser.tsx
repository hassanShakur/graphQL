import React from 'react';

const CreateUser = () => {
  return (
    <div className='user-form'>
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;

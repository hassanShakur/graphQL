import deleteUser from '@/queries/deleteUser';
import { useMutation } from '@apollo/client';
import client from '@/apolloClient';
import { Key } from 'react';

const DeleteUserBtn = ({ id }: { id: Key }) => {
  const [invokeDelUser] = useMutation(deleteUser, {
    variables: {
      id,
    },
    client,
  });

  return (
    <div className='delete-user' onClick={() => invokeDelUser()}>
      del
    </div>
  );
};

export default DeleteUserBtn;

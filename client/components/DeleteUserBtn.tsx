import deleteUser from '@/queries/deleteUser';
import { useMutation } from '@apollo/client';
import client from '@/apolloClient';
import { Key } from 'react';
import allUsersQuery from '@/queries/getAllUsers';
import { TbTrash } from 'react-icons/tb';

const DeleteUserBtn = ({ id }: { id: Key }) => {
  const [invokeDelUser] = useMutation(deleteUser, {
    client,
    variables: {
      id,
    },
    refetchQueries: [{ query: allUsersQuery.query }],
  });

  return (
    <div className='delete-user' onClick={() => invokeDelUser()}>
      <TbTrash className='icon' />
    </div>
  );
};

export default DeleteUserBtn;

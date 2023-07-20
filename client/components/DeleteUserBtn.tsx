import deleteUser from '@/queries/deleteUser';
import { useMutation } from '@apollo/client';
import client from '@/apolloClient';
import allUsersQuery from '@/queries/getAllUsers';
import { TbTrash } from 'react-icons/tb';
import { DeteteUserBtnProps } from '@/helpers/propTypes';

const DeleteUserBtn = ({ id, setAllUsers }: DeteteUserBtnProps) => {
  const [invokeDelUser] = useMutation(deleteUser, {
    client,
    variables: {
      id,
    },
    refetchQueries: [{ query: allUsersQuery.query }],
  });

  const delUser = () => {
    invokeDelUser();
    setAllUsers((prev) => {
      const newUsers = prev.filter((user) => user.id !== id);
      return newUsers;
    });
  };

  return (
    <div className='delete-user' onClick={delUser}>
      <TbTrash className='icon' />
    </div>
  );
};

export default DeleteUserBtn;

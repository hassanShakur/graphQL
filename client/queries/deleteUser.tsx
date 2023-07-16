import { gql } from '@apollo/client/core';

const deleteUser = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      name
    }
  }
`;

export default deleteUser;

import { gql } from '@apollo/client/core';

const allUsersQuery = {
  query: gql`
    {
      users {
        id
        name
      }
    }
  `,
};

export default allUsersQuery;

import { gql } from '@apollo/client/core';

const allUsersQuery = {
  query: gql`
    {
      users {
        id
        name
        age
        company {
          name
        }
      }
    }
  `,
};

export default allUsersQuery;

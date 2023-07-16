import { gql } from '@apollo/client/core';

const createUser = gql`
  mutation CreateUser(
    $name: String!
    $companyId: String!
    $age: Int!
  ) {
    createUser(name: $name, age: $age, companyId: $companyId) {
      name
      id
    }
  }
`;

export default createUser;

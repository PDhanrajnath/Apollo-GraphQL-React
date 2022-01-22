import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($userId: String, $userName: String) {
    addUser(id: $userId, name: $userName) {
      id
      name
    }
  }
`;

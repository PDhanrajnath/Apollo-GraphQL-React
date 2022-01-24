import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($userId: String, $userName: String) {
    addUser(id: $userId, name: $userName) {
      id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: String) {
    deleteUser(id: $deleteUserId)
  }
`;

export const GET_USER = gql`
  {
    allUsers {
      id
      name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserId: String, $updateUserName: String) {
    updateUser(id: $updateUserId, name: $updateUserName) {
      id
      name
    }
  }
`;

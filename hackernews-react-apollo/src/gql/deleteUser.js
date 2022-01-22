import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: String) {
    deleteUser(id: $deleteUserId)
  }
`;

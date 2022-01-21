import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($userId: ID!) {
    user(id: $userId) {
      id
      name
    }
  }
`;
import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    allUsers {
      id
      name
    }
  }
`;

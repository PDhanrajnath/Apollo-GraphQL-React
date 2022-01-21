const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type User {
    id: ID!
    name: String
  }
  type Query {
    user(id: ID!): User
  }
  type Mutation {
    addUser(id: String, name: String): User
    deleteUser(id: String): String
  }
`;
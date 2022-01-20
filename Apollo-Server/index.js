const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
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

const users = [
  {
    id: "1",
    name: "Elizabeth Bennet",
  },
  {
    id: "2",
    name: "Fitzwilliam Darcy",
  },
];

const resolvers = {
  Query: {
    user(_parent, args) {
      return users.find((user) => user.id === args.id);
    },
  },
  Mutation: {
    addUser: (_parent, args, context) => {
      const usr = {
        id: args.id,
        name: args.name,
      };
      users.push(usr);
      console.log(context.key);
      return usr;
    },
    deleteUser: (_parent, args) => {
      users.pop(users.id !== args.id);
      return "pop success";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    // console.log(req.headers.authorization);
    return {
      key: "value",
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

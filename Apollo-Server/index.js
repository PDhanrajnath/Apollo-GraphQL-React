const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type User {
    id: ID!
    name: String
  }
  type Query {
    books: [Book]
    numberSix: Int!
    user(id: ID!): User
  }
  type Mutation {
    addBook(title: String, author: String): Book
    addUser(id: String, name: String): User
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    numberSix() {
      return 6;
    },
    user(_parent, args) {
      return users.find((user) => user.id === args.id);
    },
  },
  Mutation: {
    addBook: (_parent, args, context) => {
      const book = {
        title: args.title,
        author: args.author,
      };
      books.push(book);
      console.log(context.key);
      return book;
    },
    addUser: (_parent, args, context) => {
      const usr = {
        id: args.id,
        name: args.name,
      };
      users.push(usr);
      console.log(context.key);
      return usr;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
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

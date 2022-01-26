const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/index.js");
const { resolvers } = require("./Resolver/index.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    //Auth0 to be implemented
    return {
      key: "value",
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

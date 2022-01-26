const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const { typeDefs } = require("./schema/index.js");
const { resolvers } = require("./Resolver/index.js");
const { verifyToken } = require("./utils/verifyToken");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, ...res }) => {
    let isAuthenticated = false;
    let user = null;

    try {
      const authHeader = req.headers.authorization || "";

      if (authHeader) {
        const token = authHeader.split(" ")[1];

        const payload = await verifyToken(token);

        console.log("payload: ", payload);
      }
    } catch (error) {
      console.log("error: ", error);
    }

    console.log("headers auth: ", req.headers.authorization);
  },
});

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req, res }) => {
//     //Auth0 to be implemented
//     return {
//       key: "value",
//     };
//   },
// });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

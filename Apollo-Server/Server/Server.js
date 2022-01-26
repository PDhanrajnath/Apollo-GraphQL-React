const { ApolloServer, gql, AuthenticationError } = require("apollo-server");
const { typeDefs } = require("../schema/index.js");
const { resolvers } = require("../Resolver/index.js");

const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const client = jwksClient({
  jwksUri: `https://dev-8he0qf5r.us.auth0.com/.well-known/jwks.json`,
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: "8Mm16ydfIoYPPffX4C1rkEfkLTLtyp92",
  issuer: `https://dev-8he0qf5r.us.auth0.com/`,
  algorithms: ["RS256"],
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // simple auth check on every request
    const token = req.headers.authorization;
    const user = new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, decoded) => {
        if (err) {
          return reject(err);
        }
        resolve(decoded.email);
      });
    });

    return {
      user,
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

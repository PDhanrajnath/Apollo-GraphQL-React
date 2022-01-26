const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const verifyToken = async (bearerToken) => {
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
  return new Promise((resolve, reject) => {
    jwt.verify(
      bearerToken,
      getKey,
      {
        audience: options.audience,
        issuer: options.issuer,
        algorithms: ["RS256"],
      },
      function (err, decoded) {
        if (err) reject(err);
        resolve(decoded);
      }
    );
  });
};

module.exports = {
  verifyToken,
};

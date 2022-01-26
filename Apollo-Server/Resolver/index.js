const { AuthenticationError } = require("apollo-server");
const { users } = require("../Dataset/index.js");

exports.resolvers = {
  Query: {
    user(_parent, args) {
      return users.find((user) => user.id === args.id);
    },
    allUsers: () => users,
  },
  Mutation: {
    addUser: async (_parent, args, { user }) => {
      try {
        const email = await user;
        const usr = await {
          id: args.id,
          name: args.name,
        };
        await users.push(usr);
        return usr;
      } catch (e) {
        throw new AuthenticationError("You must be logged in");
      }
    },
    updateUser: (_parent, args, context) => {
      let idx = users.indexOf(users.find((user) => user.id === args.id));
      users.splice(idx, 1);
      const usr = {
        id: args.id,
        name: args.name,
      };
      users.push(usr);
      return usr;
    },
    deleteUser: (_parent, args) => {
      let idx = users.indexOf(users.find((user) => user.id === args.id));
      users.splice(idx, 1);
      return true;
    },
  },
};

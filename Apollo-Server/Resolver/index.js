const { users } = require("../Dataset/index.js");

exports.resolvers = {
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
      return usr;
    },
    deleteUser: (_parent, args) => {
      users.pop(users.id !== args.id);
      return "pop success";
    },
  },
};

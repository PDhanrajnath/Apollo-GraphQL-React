const { users } = require("../Dataset/index.js");

exports.resolvers = {
  Query: {
    user(_parent, args) {
      return users.find((user) => user.id === args.id);
    },
    allUsers: () => users,
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

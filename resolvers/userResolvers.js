const User = require("../models/User");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    // Autres résolveurs de requêtes...
  },
  Mutation: {
    createUser: async (_, { input }) => {
      return await User.create(input);
    },
    // Autres résolveurs de mutations...
  },
};

module.exports = resolvers;

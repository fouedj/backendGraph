const { buildSchema } = require("graphql");
const User = require("../models/User");

// Définir le schéma GraphQL
const schema = buildSchema(`
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID!
    name: String
    email: String
  }
`);
const root = {
  getUser: async ({ id }) => {
    return await User.findById(id);
  },
  getUsers: async () => {
    return await User.find();
  },
  createUser: async ({ name, email }) => {
    const user = new User({ name, email });
    return await user.save();
  },
  updateUser: async ({ id, name, email }) => {
    return await User.findByIdAndUpdate(id, { name, email }, { new: true });
  },
  deleteUser: async ({ id }) => {
    return await User.findByIdAndDelete(id);
  },
};

module.exports = { schema, root };

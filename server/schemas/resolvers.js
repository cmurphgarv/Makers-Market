const { AuthenticationError } = require("apollo-server-express");
const { Category, Order, Product, User } = require("../models");

const resolvers = {
  Query: {
    products: async () => {
      return Product.find({});
    },

    product: async (parent, { productId }) => {
      return Product.findOne({ _id: productId });
    },

    categories: async () => {
      return Category.find({});
    },

    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
};

const { AuthenticationError } = require("apollo-server-express");
const { Category, Order, Product, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find({}).populate("category");
    },

    product: async (parent, { productId }) => {
      return await Product.findOne({ _id: productId }).populate("category");
    },

    productByCategory: async (parent, { categoryId }) => {
      return await Product.find({ category: categoryId });
    },

    categories: async () => {
      return await Category.find({});
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user;
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      // console.log(context);
      if (context.user) {
        const order = new Order({ products });
        console.log(order);

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

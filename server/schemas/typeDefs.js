const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    products: [Product]
    product(productId: ID!): Product
    categories: [Category]
    user: User
    order(orderId: ID!): Order
  }

  type Category {
    _id: ID
    name: String
  }

  type Order {
    _id: ID
    purchaseDate: Date
    products: [Product]
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    orders: [Order]
  }
`;

module.exports = typeDefs;

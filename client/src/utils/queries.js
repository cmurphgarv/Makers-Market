import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      category {
        name
        _id
      }
      description
      image
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      price
      description
      image
      category {
        name
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      name
      _id
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
          description
          image
          category {
            name
          }
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

<<<<<<< HEAD
export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
=======
export const QUERY_USER = gql`
query User {
  user {
    orders {
      purchaseDate
      products {
        quantity
        price
      }
>>>>>>> 934ebd0279f6a1e203b6766e4c5d8eee3d8d41df
    }
    lastName
    firstName
  }
}
`;

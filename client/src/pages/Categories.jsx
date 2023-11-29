import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

// Define the GraphQL query
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

function List(props) {
  // Execute the GraphQL query using useQuery
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="list-group">
      {/* Map over each product and render a list item */}
      {data.products.map(product => (
        <li className="list-group-item" key={product._id}>
          {product.name}
          <p data-id={product._id}>{product.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;

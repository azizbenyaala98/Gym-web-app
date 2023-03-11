import React from 'react';
import { gql } from '@apollo/client';
import useAdd from '../../hooks/useAdd';

const ADD_PRODUCT_MUTATION = gql`
  mutation AddMember($document: ProductInput!) {
    addProduct(document: $document) {
      id
    }
  }
`;

export default function ProductAdd() {
  const { rendrer } = useAdd({
    addMutation: ADD_PRODUCT_MUTATION,
    pathBack: '/products',
    fields: ['title', 'price', 'description', 'picture'],
    variableName: 'document',
  });
  return <div>{rendrer}</div>;
}

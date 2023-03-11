import React from 'react';
import { gql } from '@apollo/client';
import useAdd from '../../hooks/useAdd';

const ADD_SALLE_MUTATION = gql`
  mutation AddSalle($document: SalleInput) {
    addSalle(document: $document) {
      id
      title
    }
  }
`;

export default function AddSalle() {
  const { rendrer } = useAdd({
    addMutation: ADD_SALLE_MUTATION,
    pathBack: '/salles',
    fields: ['title'],
    variableName: 'document',
  });
  return <div>{rendrer}</div>;
}

import React from 'react';
import { gql } from '@apollo/client';
import useAdd from '../../hooks/useAdd';

const ADD_COACH_MUTATION = gql`
  mutation AddCoach($document: CoachInput!) {
    addCoach(document: $document) {
      id
    }
  }
`;

export default function CoachAdd() {
  const { rendrer } = useAdd({
    addMutation: ADD_COACH_MUTATION,
    pathBack: '/coaches',
    fields: ['fullname', 'email', 'address', 'picture', 'specialty'],
    variableName: 'document',
  });
  return <div>{rendrer}</div>;
}

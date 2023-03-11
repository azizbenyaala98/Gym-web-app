import React from 'react';

import { gql } from '@apollo/client';

import useUpdate from '../../hooks/useUpdate';
import Wrapper from '../../components/Wrapper';

const GET_SALLE_QUERY = gql`
  query GetSalle($id: ID) {
    getSalle(id: $id) {
      id
      title
    }
  }
`;

const UPDATE_SALLE_MUTATION = gql`
  mutation UpdateSalle($id: ID, $document: SalleInput) {
    updateSalle(id: $id, document: $document) {
      id
      title
    }
  }
`;

export default function SalleUpdate() {
  const { formRender, actions, header, loading, error } = useUpdate({
    getQuery: GET_SALLE_QUERY,
    idName: 'id',
    updateMutation: UPDATE_SALLE_MUTATION,
    keysToRemove: ['__typename', '_id', 'id'],
    pathBack: '/salles',
    resourceType: 'Salle',
    queryName: 'getSalle',
  });

  return (
    <Wrapper loading={loading} error={error}>
      <>
        {header}

        {formRender}
        {actions}
      </>
    </Wrapper>
  );
}

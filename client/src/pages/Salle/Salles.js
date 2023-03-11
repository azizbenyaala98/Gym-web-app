import React from 'react';
import Wrapper from '../../components/Wrapper';
import { useList } from '../../hooks/useCrud';
import { gql } from '@apollo/client';

const GET_ALL_SALLES_QUERY = gql`
  query GetSalles {
    getSalles {
      id
      title
    }
  }
`;

const DELETE_SALLES_MUTATION = gql`
  mutation DeleteSalles($id: ID) {
    deleteSalle(id: $deleteSalleId)
  }
`;

function Salles() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_SALLES_MUTATION,
    getMutation: GET_ALL_SALLES_QUERY,
    queryName: 'getSalles',
    addPath: '/salles/add',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'title', headerName: 'Salle Name', width: 200 },
    ],
  });

  return (
    <Wrapper loading={loading} error={error}>
      Salles
      <div style={{ height: 400, width: '100%' }}>
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Salles;

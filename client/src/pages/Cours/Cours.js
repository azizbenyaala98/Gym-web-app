import React from 'react';
import Wrapper from '../../components/Wrapper';
import { useList } from '../../hooks/useCrud';
import { gql } from '@apollo/client';

const GET_ALL_COURS_QUERY = gql`
  query GetCours {
    getCours {
      id
      title
    }
  }
`;

const DELETE_COURS_MUTATION = gql`
  mutation DeleteCours($id: ID) {
    deleteCours(id: $id)
  }
`;

function Cours() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_COURS_MUTATION,
    getMutation: GET_ALL_COURS_QUERY,
    queryName: 'getCours',
    addPath: '/cours/add',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'title', headerName: 'Course Name', width: 200 },
    ],
  });

  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ height: 400, width: '100%' }}>
        Courses
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Cours;

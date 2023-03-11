import * as React from 'react';
import { gql } from '@apollo/client';
import { useList } from '../../hooks/useCrud';
import Wrapper from '../../components/Wrapper';

const GET_ALL_COACH_QUERY = gql`
  query GetCoachs {
    getCoachs {
      id
      fullname
      email
      address
      picture
      specialty
      available
    }
  }
`;

const DELETE_COACH_MUTATION = gql`
  mutation DeleteCoach($id: ID!) {
    deleteCoach(id: $id)
  }
`;

function Coaches() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_COACH_MUTATION,
    getMutation: GET_ALL_COACH_QUERY,
    queryName: 'getCoachs',
    addPath: '/coaches/add',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'fullname', headerName: 'Coach name', width: 200 },
      { field: 'email', headerName: 'Coach email', width: 200 },
      { field: 'address', headerName: 'Coach Address', width: 200 },
    ],
  });

  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ height: 400, width: '100%' }}>
        Coaches
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Coaches;

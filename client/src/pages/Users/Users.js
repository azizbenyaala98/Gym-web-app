import * as React from 'react';
import { gql } from '@apollo/client';
import { useList } from '../../hooks/useCrud';
import Wrapper from '../../components/Wrapper';

const GET_ALL_USERS_QUERY = gql`
  query getAllUsers {
    users {
      _id
      id
      email
      firstname
      lastname
      gender
      birthday
    }
  }
`;

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

function Users() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_USER_MUTATION,
    getMutation: GET_ALL_USERS_QUERY,
    queryName: 'users',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'firstname', headerName: 'First name', width: 200 },
      { field: 'lastname', headerName: 'Last name', width: 200 },
      {
        field: 'birthday',
        headerName: 'Age',
        type: 'number',
        width: 90,
        renderCell: ({ value }) => {
          return new Date(value).toDateString();
        },
      },
    ],
  });

  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ height: 400, width: '100%' }}>
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Users;

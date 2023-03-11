import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useList } from '../../hooks/useCrud';
import Wrapper from '../../components/Wrapper';

const GET_ALL_MEMBERS_QUERY = gql`
  query getAllMembers {
    getAllMembers {
      id
      email
      fullname
      gender
      birthday
    }
  }
`;

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMember($id: ID!) {
    deleteMember(id: $id)
  }
`;

function Members() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_MEMBER_MUTATION,
    getMutation: GET_ALL_MEMBERS_QUERY,
    queryName: 'getAllMembers',
    addPath: '/members/add',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'fullname', headerName: 'Full name', width: 200 },
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
        Members
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Members;

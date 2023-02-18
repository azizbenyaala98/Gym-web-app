import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

function Members() {
  const { data, loading, error } = useQuery(GET_ALL_MEMBERS_QUERY);
  // const [deleteUserOperation] = useMutation(DELETE_USER_MUTATION, {
  //   refetchQueries: [{ query: GET_ALL_USERS_QUERY }],
  // });

  // function handleDeleteUser(id) {
  //   deleteUserOperation({
  //     variables: {
  //       id,
  //     },
  //   });
  // }

  const columns = [
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
    {
      field: 'edit',
      headerName: 'Edit',
      width: 90,
      renderCell: ({ row }) => {
        return <Link to={`${row.id}/update`}>Edit</Link>;
      },
    },
    // {
    //   field: 'delete',
    //   headerName: 'Edit',
    //   width: 90,
    //   renderCell: ({ row }) => {
    //     return (
    //       <Button onClick={() => handleDeleteUser(row.id)}>Delete </Button>
    //     );
    //   },
    // },
  ];
  if (error) return <div>Error</div>;
  if (loading) return <div>loading</div>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Button>
        <Link to="/members/add">Add</Link>{' '}
      </Button>
      <DataGrid
        rows={data.getAllMembers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Members;

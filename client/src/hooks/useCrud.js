import { React, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

export function useList({
  deleteMutation,
  getMutation,
  columns,
  queryName,
  addPath,
}) {
  const { data, loading, error, refetch } = useQuery(getMutation);
  const [deleteOperation, { loading: mutationLoading }] = useMutation(
    deleteMutation,
    {
      refetchQueries: [{ query: getMutation }],
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  async function handleDelete(id) {
    const result = await deleteOperation({
      variables: {
        id,
      },
    });
    if (result) {
      refetch();
    }
  }

  const actions = [
    {
      field: 'edit',
      headerName: 'Edit',
      width: 90,
      renderCell: ({ row }) => {
        return <Link to={`${row.id}/update`}>Edit</Link>;
      },
    },
    {
      field: 'delete',
      headerName: 'Edit',
      width: 90,
      renderCell: ({ row }) => {
        return <Button onClick={() => handleDelete(row.id)}>Delete </Button>;
      },
    },
  ];

  const list = (data && data[queryName]) || [];

  const headerElements = (
    <div style={{ marginBottom: 10, marginTop: 10 }}>
      <Button variant="outlined" onClick={() => refetch()}>
        Refresh
      </Button>
      <Button style={{ color: 'white', marginLeft: 10 }} variant="contained">
        <Link style={{ color: 'white' }} to={addPath}>
          Add
        </Link>{' '}
      </Button>
    </div>
  );
  const tableRenderer = (
    <DataGrid
      style={{ marginRight: 10 }}
      rows={list}
      columns={[...columns, ...actions]}
      pageSize={list.length}
      rowsPerPageOptions={[5]}
      loading={mutationLoading || loading}
    />
  );

  return {
    data,
    refetch,
    loading: loading,
    actionsLoader: mutationLoading,
    error,
    handleDelete,
    actions,
    headerElements,
    tableRenderer,
  };
}

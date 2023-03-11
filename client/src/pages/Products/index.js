import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useList } from '../../hooks/useCrud';
import Wrapper from '../../components/Wrapper';

const GET_ALL_PRODUCTS_QUERY = gql`
  query getProducts {
    getProducts {
      id
      title
      price
      description
      loved
      picture
    }
  }
`;

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id)
  }
`;

function Products() {
  const { headerElements, loading, error, tableRenderer } = useList({
    deleteMutation: DELETE_PRODUCT_MUTATION,
    getMutation: GET_ALL_PRODUCTS_QUERY,
    queryName: 'getProducts',
    addPath: '/products/add',
    columns: [
      { field: 'id', headerName: 'ID', width: 200 },
      { field: 'title', headerName: 'Product name', width: 200 },
    ],
  });

  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ height: 400, width: '100%' }}>
        Products
        {headerElements}
        {tableRenderer}
      </div>
    </Wrapper>
  );
}

export default Products;

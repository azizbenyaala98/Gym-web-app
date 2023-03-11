import React from 'react';
import ProductCard from '../../components/ProductCard';
import { gql, useMutation, useQuery } from '@apollo/client';
import Wrapper from '../../components/Wrapper';
import { Grid } from '@mui/material';

export default function ProductsShow() {
  const { data, loading, error, refetch } = useQuery(gql`
    query GetProducts {
      getProducts {
        id
        title
        price
        description
        picture
        loved
      }
    }
  `);

  const [loveProductOperation] = useMutation(gql`
    mutation AddLoveToProduct($id: ID) {
      addLoveToProduct(id: $id) {
        id
        title
        price
        description
        picture
        loved
      }
    }
  `);

  const [addProductToCart] = useMutation(gql`
    mutation AddCart($document: CartInput) {
      addCart(document: $document) {
        id
        title
        price
        description
        picture
        loved
      }
    }
  `);

  function handleLoveProduct(id) {
    loveProductOperation({ variables: { id } }).then(() => {
      refetch();
    });
  }

  async function handleAddToCart(document) {
    await addProductToCart({
      variables: {
        document,
      },
    });
  }
  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ margin: 50 }}>
        Welcome
        <Grid container>
          {data?.getProducts.map((product) => (
            <Grid style={{ margin: 10 }}>
              <ProductCard
                {...product}
                withActions
                handleAddToCart={handleAddToCart}
                handleLoveProduct={handleLoveProduct}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
}

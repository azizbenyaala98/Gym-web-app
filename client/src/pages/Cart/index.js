import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import { Grid } from '@mui/material';
import ProductCard from '../../components/ProductCard';

export default function Cart() {
  const [items, setItems] = useState([]);
  const { data, loading, error, refetch } = useQuery(gql`
    query GetCarts {
      getCarts {
        id
        title
        price
        description
        picture
      }
    }
  `);
  const [deleteOperation] = useMutation(gql`
    mutation DeleteCart($id: ID) {
      deleteCart(id: $id)
    }
  `);
  function handleDelete(id) {
    deleteOperation({
      variables: { id },
    }).then(() => {
      refetch();
    });
  }

  const totalPrice = data?.getCarts.reduce((oldPrice, product) => {
    return product?.price + oldPrice;
  }, 0);
  useEffect(() => {
    // const cartItems = {};
    // data?.getCarts.forEach((cartItem) => {
    //   if (cartItems[cartItem.title]) {
    //     cartItems[cartItem.title].quantity =
    //       (cartItems[cartItem.title]?.quantity || 0) + 1;
    //   } else {
    //     cartItems[cartItem.title] = { ...cartItem, quantity: 1 };
    //   }
    // });
    // const _items = Object.values(cartItems);
    // console.log(_items);
    setItems(data?.getCarts);
  }, [data?.getCarts]);

  return (
    <Wrapper loading={loading} error={error}>
      <div style={{ margin: 50 }}>
        <h1 style={{ color: 'white', paddingTop: 100 }}>Welcome to cart</h1>
        <Grid container>
          {items
            ? items.map((product) => (
                <Grid style={{ margin: 10 }}>
                  <ProductCard
                    deleteAction
                    handleDelete={handleDelete}
                    {...product}
                  />
                </Grid>
              ))
            : 'Cart empty'}
        </Grid>

        <h1 style={{ color: 'white' }}>Total Price: {totalPrice}</h1>
      </div>
    </Wrapper>
  );
}

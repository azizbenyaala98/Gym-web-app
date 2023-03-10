import React from 'react';

import { gql } from '@apollo/client';

import useUpdate from '../../hooks/useUpdate';
import Wrapper from '../../components/Wrapper';

const GET_USER_QUERY = gql`
  query GetUser($userId: ID!) {
    getUser(id: $userId) {
      _id
      email
      address
      birthday
      description
      gender
      firstname
      lastname
      middlename
      id
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation Mutation($id: ID!, $document: UserInput) {
    updateUser(id: $id, document: $document) {
      _id
      address
      birthday
      createdAt
      country
      description
      firstname
      email
      gender
      id
      middlename
      lastname
      phoneNumber
      picture
      role
      updatedAt
      username
    }
  }
`;

export default function User() {
  const { formRender, actions, header, loading, error } = useUpdate({
    getQuery: GET_USER_QUERY,
    idName: 'userId',
    updateMutation: UPDATE_USER_MUTATION,
    keysToRemove: ['__typename', '_id', 'id'],
    pathBack: '/users',
    resourceType: 'User',
    queryName: 'getUser',
  });

  return (
    <Wrapper loading={loading} error={error}>
      <>
        {header}

        {formRender}
        {actions}
      </>
    </Wrapper>
  );
}

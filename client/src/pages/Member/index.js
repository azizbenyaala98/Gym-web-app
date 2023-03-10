import React from 'react';

import { gql } from '@apollo/client';

import useUpdate from '../../hooks/useUpdate';
import Wrapper from '../../components/Wrapper';

const GET_MEMBER_QUERY = gql`
  query GetMember($id: ID!) {
    getMember(id: $id) {
      _id
      id
      email
      fullname
      birthday
      gender
      address
      description
      phoneNumber
    }
  }
`;

const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMember($id: ID!, $document: MemberInput!) {
    updateMember(id: $id, document: $document) {
      _id
      id
      email
      fullname
      birthday
      gender
      address
      description
      phoneNumber
    }
  }
`;

export default function Member() {
  const { formRender, actions, header, loading, error } = useUpdate({
    getQuery: GET_MEMBER_QUERY,
    idName: 'id',
    updateMutation: UPDATE_MEMBER_MUTATION,
    keysToRemove: ['__typename', '_id', 'id'],
    pathBack: '/members',
    resourceType: 'Member',
    queryName: 'getMember',
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

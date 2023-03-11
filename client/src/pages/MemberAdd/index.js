import React from 'react';
import { gql } from '@apollo/client';
import useAdd from '../../hooks/useAdd';

const ADD_MEMBER_MUTATION = gql`
  mutation AddMember($memberData: MemberInput!) {
    addMember(memberData: $memberData) {
      _id
    }
  }
`;

export default function MemberAdd() {
  const { rendrer } = useAdd({
    addMutation: ADD_MEMBER_MUTATION,
    pathBack: '/members',
    fields: ['email', 'fullname', 'gender', 'birthday'],
    variableName: 'memberData',
    resourceType: 'member',
  });
  return <div>{rendrer}</div>;
}

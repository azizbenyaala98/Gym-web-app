import React, { useState } from 'react';
import Input from '../../components/Input';
import { Button } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import useAdd from '../../hooks/useAdd';

const fields = ['email', 'fullname', 'gender', 'birthday'];

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
  });
  return <div>{rendrer}</div>;
}

import React, { useState } from 'react';
import Input from '../../components/Input';
import { Button } from '@mui/material';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const fields = ['email', 'fullname', 'gender', 'birthday'];

const ADD_MEMBER_MUTATION = gql`
  mutation AddMember($memberData: MemberInput!) {
    addMember(memberData: $memberData) {
      _id
    }
  }
`;

export default function MemberAdd() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [addMemberOperation] = useMutation(ADD_MEMBER_MUTATION);

  function handleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit() {
    addMemberOperation({
      variables: {
        memberData: form,
      },
    }).then(() => {
      navigate('/members');
    });
  }
  return (
    <div>
      {' '}
      {fields.map((name) => (
        <Input label={name} name={name} onChange={handleChange} form={form} />
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

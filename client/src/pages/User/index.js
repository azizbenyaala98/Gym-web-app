import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';
import Input from '../../components/Input';
import { Button } from '@mui/material';

const removedKeys = ['__typename', '_id', 'id'];

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
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { userId } = useParams();
  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      userId,
    },
  });
  const [updateOperation] = useMutation(UPDATE_USER_MUTATION);
  function handleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    if (!error && !loading) {
      let clone = {
        ...data.getUser,
      };
      removedKeys.forEach((name) => {
        delete clone[name];
      });
      setForm((form) => ({
        ...form,
        ...clone,
      }));
    }
  }, [data?.getUser]);

  function handleSubmit() {
    updateOperation({
      variables: {
        id: userId,
        document: form,
      },
    }).then(() => {
      navigate('/users');
    });
  }

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  console.log(form);

  return (
    <div>
      <div>User {data.getUser.id}</div>
      {/* <Input name="email" onChange={handleChange} label="email" form={form} />
      <Input
        name="address"
        onChange={handleChange}
        label="address"
        form={form}
      />
      <Input
        label="Birthday"
        name="birthday"
        onChange={handleChange}
        form={form}
      /> */}
      {Object.keys(form).map((name) => (
        <Input label={name} name={name} onChange={handleChange} form={form} />
      ))}
      <Button onClick={handleSubmit}>handleSubmit</Button>
    </div>
  );
}

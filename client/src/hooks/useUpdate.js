import { useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input';
import { Button, Grid, Typography } from '@mui/material';

export default function useUpdate({
  getQuery,
  idName,
  updateMutation,
  keysToRemove,
  pathBack,
  resourceType,
  queryName,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  const params = useParams();
  const id = params[idName];
  const { data, loading, error } = useQuery(getQuery, {
    variables: {
      [idName]: id,
    },
  });
  const [updateOperation, { error: mutationError }] =
    useMutation(updateMutation);

  function handleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }
  console.log('Data', data);
  useEffect(() => {
    if (!error && !loading) {
      let clone = {
        ...data[queryName],
      };
      keysToRemove.forEach((name) => {
        delete clone[name];
      });
      setForm((form) => ({
        ...form,
        ...clone,
      }));
    }
  }, [data]);

  function handleSubmit() {
    updateOperation({
      variables: {
        id,
        document: form,
      },
    }).then(() => {
      navigate(pathBack);
    });
  }

  const formRender = form ? (
    <Grid style={{ marginTop: 10 }} container spacing={2}>
      {Object.keys(form).map((name) => (
        <Grid item lg={5}>
          <Input label={name} name={name} onChange={handleChange} form={form} />
        </Grid>
      ))}
    </Grid>
  ) : (
    'NO data'
  );

  const actions = (
    <div style={{ marginTop: 10 }}>
      <h4>{mutationError?.message}</h4>
      <Button
        style={{ backgroundColor: 'blue', color: 'white', marginTop: 10 }}
        onClick={handleSubmit}
      >
        Update {resourceType}
      </Button>
    </div>
  );
  const header = (
    <Typography style={{ marginBottom: 10 }}>
      {resourceType} {data && data[queryName]?.id} details
    </Typography>
  );

  return {
    formRender,
    actions,
    header,
    data,
    loading,
    error,
  };
}

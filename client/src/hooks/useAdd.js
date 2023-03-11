import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { Button, Grid, Typography } from '@mui/material';

export default function useAdd({
  addMutation,
  pathBack,
  fields,
  variableName,
  resourceType = '',
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [addOperation] = useMutation(addMutation);

  function handleChange(e) {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit() {
    addOperation({
      variables: {
        [variableName]: form,
      },
    }).then(() => {
      navigate(pathBack);
    });
  }

  const rendrer = (
    <div>
      <Typography style={{ marginBottom: 10 }}>
        Create New {resourceType}
      </Typography>
      <Grid container spacing={2}>
        {fields.map((name) => (
          <Grid item lg={5}>
            <Input
              label={name}
              name={name}
              onChange={handleChange}
              form={form}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        style={{ backgroundColor: 'blue', color: 'white', marginTop: 10 }}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </div>
  );

  return {
    rendrer,
  };
}

import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { Button } from '@mui/material';

export default function useAdd({
  addMutation,
  pathBack,
  fields,
  variableName,
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
      {fields.map((name) => (
        <Input label={name} name={name} onChange={handleChange} form={form} />
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );

  return {
    rendrer,
  };
}

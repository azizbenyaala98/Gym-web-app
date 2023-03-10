import { useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input';
import { Button } from '@mui/material';

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
  const [updateOperation] = useMutation(updateMutation);

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

  const formRender = form
    ? Object.keys(form).map((name) => (
        <Input label={name} name={name} onChange={handleChange} form={form} />
      ))
    : 'NO data';

  const actions = <Button onClick={handleSubmit}>Update {resourceType}</Button>;

  const header = (
    <div>
      {resourceType} {data && data[queryName]?.id}
    </div>
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

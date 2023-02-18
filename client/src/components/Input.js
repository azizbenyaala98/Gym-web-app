import React from 'react';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  const { label, name, form, ...rest } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>{label}</span>
      <TextField name={name} variant="outlined" value={form[name]} {...rest} />
    </div>
  );
}

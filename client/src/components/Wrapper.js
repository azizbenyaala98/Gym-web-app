import React from 'react';

export default function Wrapper({ loading, error, children }) {
  if (error) return <div>Error</div>;
  if (loading) return <div>loading</div>;
  return children;
}

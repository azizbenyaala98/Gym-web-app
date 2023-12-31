import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavDash from '../components/NavDash.js';
import './Layout.css';
export default function Layout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const isConnected = localStorage.getItem('isConnected');
    if (!isConnected) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <header>
        <NavDash></NavDash>
      </header>

      <div
        style={{
          marginLeft: '300px',
          marginTop: '100px',
          maxWidth: '80vw',
        }}
      >
        {children}
      </div>
    </div>
  );
}

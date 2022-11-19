import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    if (!isConnected) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <header>
        <h1>Layout Dahboard</h1>
      </header>
      {children}
    </div>
  );
}

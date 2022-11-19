import React, { useEffect } from "react";

import "./login.css";
import { useState } from "react";
import { useLogin } from "../API/Auth/requests";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error, data }] = useLogin();

  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    if (isConnected) {
      navigate("/dashboard");
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  const url = "https://www.google.com/";
  console.log(data, error, loading);
  async function handleLogin() {
    try {
      const result = await login({ variables: { email, password } }).catch(
        () => {
          console.log("error");
        }
      );
      if (result && result.data) {
        localStorage.setItem("isConnected", true);
        navigate("/dashboard");
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className="body">
      <div className="box">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span>Userame</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <p style={{ color: "red", marginTop: "10px" }}>
            {error?.message || ""}
          </p>
          <div className="links">
            <a href={url}>Forgot Password ?</a>
            <a href={url}>Signup</a>
          </div>
          <button className="submitLogin" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

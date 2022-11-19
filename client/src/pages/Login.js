import React from 'react'

import './login.css'
import { useState } from 'react';
import { useLogin } from '../API/Auth/requests';



const Login = ( ) => {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error, data }] = useLogin()
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

const url="https://www.google.com/"
console.log(data,error,loading)
  return (
    <div className='body'>
    <div className="box">
		<form autoComplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required" value={email}
				onChange={(event) => setEmail(event.target.value)}
				 
				
				/>
				<span>Userame</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required" 
				           value={password}
						   onChange={(event) => setPassword(event.target.value)}	/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href={url}>Forgot Password ?</a>
				<a href={url}>Signup</a>
			</div>
			<input type="submit" onClick={
          () => login({ variables: { email, password } })
        }/>
		</form>
	</div>
  </div>
  )
}

export default Login
import React from 'react'
import './login.css'


function Login() {
const url="https://www.google.com/";
  return (
    <div className='body'>
    <div className="box">
		<form autoComplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required"/>
				<span>Userame</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href={url}>Forgot Password ?</a>
				<a href={url}>Signup</a>
			</div>
			<input type="submit" value="Login"/>
		</form>
	</div>
  </div>
  )
}

export default Login
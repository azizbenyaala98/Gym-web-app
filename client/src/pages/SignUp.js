import React from 'react'
import './SignUp.css'
function SignUp() {
  const url="www.google.com"
  return (
  <div className='boody'>
  <div className="box">
  <form autoComplete="off">
    <h2>Sign Up</h2>
    <div className='Left' >
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>Userame</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>email</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>first name</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>last name</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input  type="date" />
      <span > birthday</span>
      <i></i>
    </div>
    
    
    </div>
    <div className='right'>
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>adress</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="text" required="required"/>
      <span>phone number</span>
      <i></i>
    </div>
    <div className="inputBox">


      <input type="text" required="required"/>
      
      
      
      
      <span>Gender</span>
      <i></i>
    
    
    
    </div>



    <div className="inputBox">
      <input type="password" required="required"/>
      <span>password</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="password" required="required"/>
      <span>confirm your password</span>
      <i></i>
    </div>
    <input type="submit" value="Sign Up"/>
    </div>
  </form>
</div>
</div>
)
}

export default SignUp
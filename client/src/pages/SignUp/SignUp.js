import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../API/Auth/requests';
import './SignUp.css';
function SignUp() {
  const navigate = useNavigate();
  const [signupCall] = useSignup();
  const [form, setForm] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    username: '',
  });

  function handleForm(e) {
    setForm((oldForm) => {
      return {
        ...oldForm,
        [e.target.name]: e.target.value,
      };
    });
  }
  console.log('Form', form);

  async function handleSubmit() {
    try {
      const result = await signupCall({
        variables: {
          userData: form,
        },
      });
      console.log('result', result);
      if (result && result.data) {
        localStorage.setItem('isConnected', true);
        navigate('/users');
      }
    } catch (e) {}
  }
  return (
    <div className="boody">
      <div className="box">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <h2>Sign Up</h2>
          <div className="Left">
            <div className="inputBox">
              <input
                name="username"
                onChange={handleForm}
                type="text"
                required="required"
              />
              <span>Userame</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                name="email"
                onChange={handleForm}
                type="text"
                required="required"
              />
              <span>email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                name="firstname"
                onChange={handleForm}
                type="text"
                required="required"
              />
              <span>first name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                name="lastname"
                onChange={handleForm}
                type="text"
                required="required"
              />
              <span>last name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                // name="birthday" onChange={handleForm}

                type="date"
              />
              <span> birthday</span>
              <i></i>
            </div>
          </div>
          <div className="right">
            <div className="inputBox">
              <input
                // name="adress"
                // onChange={handleForm}
                type="text"
                // required="required"
              />
              <span>adress</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                name="phoneNumber"
                onChange={handleForm}
                type="text"
                required="required"
              />
              <span>phone number</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                // name="gender"
                // onChange={handleForm}
                type="text"
                // required="required"
              />

              <span>Gender</span>
              <i></i>
            </div>

            <div className="inputBox">
              <input
                name="password"
                onChange={handleForm}
                type="password"
                required="required"
              />
              <span>password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                name="passwordConfirm"
                onChange={handleForm}
                type="password"
                required="required"
              />
              <span>confirm your password</span>
              <i></i>
            </div>
            <input onClick={handleSubmit} type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

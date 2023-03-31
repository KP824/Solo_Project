import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const [redirect, setRedirect] = useState(false);

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    
    const userLogin = {
      email,
      password,
    }
    // create post request to server
    axios.post('/api/users/login', userLogin).then((response) => {
      setRedirect(true)
      console.log(`Inside userLogin post request: ${JSON.stringify(response.data)}`)
      
    })

  };

  return (
    <div>
      <div className="login-container">
        <h1>
          <FaSignInAlt />
          Please login below:
        </h1>
        {redirect && <Navigate to="/dashboard" replace={true} />}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>Email:</p>
            <input
              type='text'
              className='form-control'
              id='email' 
              name='email'
              value={email}
              placeholder='Enter your email peaz'
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <p>Email:</p>
            <input
              type='text'
              className='form-control'
              id='password' 
              name='password'
              value={password}
              placeholder='Enter your password peaz'
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <button type="submit" className='btn btn-block'>~Login~</button>
          </div>
        </form>
      </div>
      
    </div>
  )
};

export default Login;
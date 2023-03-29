import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.email]: event.target.value,
    }))
  }

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  };

  return (
    <div>
      <div className="login-container">
        <h1>
          <FaSignInAlt />
          Please login below:
        </h1>
        {submitting && 
          <div>Submitting form...</div>
        }
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
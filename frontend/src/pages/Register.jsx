import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import {register, reset} from '../features/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user, isError, isSuccess, message } = useSelector((state) => state.auth)

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };

  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    if (password !== password2) {
      console.log('Passwords do not match')
    } else {
      const userData = {
        name, 
        email, 
        password,
      }

      dispatch(register(userData));
    }

    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  };

  return (
    <div className="register-container">
      <h3>
        <FaUser />
        Inside of Register container
      </h3>
      <p>Please create an account</p>
      {submitting &&
        <div>Submitting form...</div>
      }
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>Name:</p>
            <input 
              type='text' 
              className='form-control' 
              id='name' 
              name='name' 
              value={name} 
              placeholder='Enter your name' 
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <p>Email:</p>
            <input 
              type='text' 
              className='form-control' 
              id='email' 
              name='email' 
              value={email} 
              placeholder='Enter your email' 
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <p>Password:</p>
            <input 
              type='text' 
              className='form-control' 
              id='password' 
              name='password' 
              value={password} 
              placeholder='Please enter a password' 
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <p>Confirm password:</p>
            <input 
              type='text' 
              className='form-control' 
              id='password2' 
              name='password2' 
              value={password2} 
              placeholder='Please confirm password' 
              onChange={onChange} 
            />
          </div>
          <div className='form-group'>
            <button type="submit" className='btn btn-block'>Register</button>
          </div>
        </form>
      </section>
    </div>
  )
};

export default Register;
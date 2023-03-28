import React, { useState } from 'react';


export const Login = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000)
  };

  return (
    <div>
      <div className="login-container">
        <h1>Please login below:</h1>
        {submitting && 
          <div>Submitting form...</div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Email:</p>
              <input name="email" />
              <p>Password:</p>
              <input name="password" />
            </label>
          </fieldset>
          <button type="submit">Login!</button>
        </form>
      </div>
      
    </div>
  )
};
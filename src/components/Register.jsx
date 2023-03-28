import React, { useState } from 'react';

export const Register = () => {
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
      <h3>Inside of Register</h3>
      {submitting &&
        <div>Submitting form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
        <label>
          <p>Name:</p>
          <input name="name" />
          <p>Email:</p>
          <input name="email" />
          <p>Password:</p>
          <input name="password" />
        </label>
        </fieldset>
        <button type="type">Register</button>
      </form>
    </div>
  )
};
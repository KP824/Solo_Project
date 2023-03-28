import React, { useState } from 'react';

export const Tasks = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 2000)
  }
  return (
    <div>
      <h2>Hello, inside of Tasks Tab!</h2>
      {submitting && 
        <div>Adding task...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>New Task?:</p>
            <input name="task" />
          </label>
        </fieldset>
        <button type="submit">Add another task:</button>
      </form>
    </div>
  )
};
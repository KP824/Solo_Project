import React, { useState } from 'react';

export const Employees = () => {
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
      <h2>Inside of Employees Tab</h2>
      <p>lorem20lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 </p>
      <div className="employee-container">
        <div className="employee-form">
        {submitting &&
        <div>Adding Employee info...</div>
        }
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Employee Full Name:</p>
                <input name="employee-name" />
                <p>Start Date:</p>
                <input name="start-date" />
                <p>Food Handler ID#:</p>
                <input name="foodhandler-id" />
                <p>Issue Date:</p>
                <input name="issue-date" />
                <p>Expiration Date:</p>
                <input name="expiration-date" />
              </label>
            </fieldset>
            <button type="submit">Add Employee Info!</button>
          </form>
        </div>

        <div className="employee-list">
          <h4> Employee display here</h4>
          <h2>Add list of employees here:</h2>
        </div>

      </div>
    </div>
  )
};
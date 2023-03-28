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
      <div className="task-container">
        <h2>Hello, inside of Tasks Tab!</h2>

        <div className="task-form">
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

        <div className="task-display">
          <h3>Add tasks list here: Flex column?</h3>
          <p>lorem20lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 </p>
        </div>
      </div>
      
      
    </div>
  )
};
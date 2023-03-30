import React, { useState } from 'react';
//import axios from 'axios';

function Tasks() {
  const [taskForm, setTaskForm] = useState({
    task: '',
  });

  const { task } = taskForm; 

  // const [submitting, setSubmitting] = useState(false);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setSubmitting(true);

  //   // check if input is valid for task
  //   if (!task) {
  //     alert(`Please add a task.`)
  //   } else {
  //     axios.post()
  //   }

  //   setTimeout(() => {
  //     setSubmitting(false);
  //   }, 1000)
  // }

  const onChange = (event) => {
    setTaskForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };

  // using an onClick approach
  function handleClick() {
    // send data to the backend via POST
    fetch('http://localhost:8080/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: task
      })
    })
  }


  return (
    <div>
      <div className="task-container">
        <h2>Hello, inside of Tasks Tab!</h2>

        <div className="task-form">
          <form onSubmit={handleClick}>
            <fieldset>
              <label>
                <p>New Task?:</p>
                <input 
                  type='text'
                  className='form-control'
                  id='task'
                  name="task"
                  value={task}
                  placeholder='Add a new task'
                  onChange={onChange}
                />
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

export default Tasks
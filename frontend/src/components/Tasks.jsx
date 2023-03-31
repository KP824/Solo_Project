import React, { useState } from 'react';
import axios from 'axios';

function Tasks() {
  const [taskForm, setTaskForm] = useState({
    task: '',
  });
  // const [listTasks, setListTasks] = 

  const { task } = taskForm; 


  const onChange = (event) => {
    setTaskForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };

  // using an onClick approach
  function handleClick() {
    // send data to the backend via POST
    axios.post('/api/users/tasks', task).then((response) => {
      console.log(`post request response: ${JSON.stringify(response.data)}`)
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
          <h3>Add tasks list here: Flex or grid?</h3>
          <div className="task-list-item">
            <h5>need tasks here</h5>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Tasks
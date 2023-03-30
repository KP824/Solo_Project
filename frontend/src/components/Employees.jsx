import React, { useState } from 'react';

function Employees() {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    foodHandlerId: '',
    issueDate: '',
    expirationDate: '',
  });

  const { name, startDate, foodHandlerId, issueDate, expirationDate } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };


  const handleSubmit = event => {
    event.preventDefault();
    

  };

  return (
    <div>
      <h2>Inside of Employees Tab</h2>
      
      <div className="employee-container">
        <div className="employee-form">
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <p>Employee Full Name:</p>
              <input 
                type='text'
                className='form-control'
                id='name'
                name="employee-name"
                value={name}
                placeholder='Enter employee name'
                onChange={onChange} 
              />
            </div>
            <div className='form-group'>
              <p>Employee's start date</p>
              <input 
                type='text'
                className='form-control'
                id='startDate'
                name="start-date"
                value={startDate}
                placeholder='Enter date'
                onChange={onChange} 
              />
            </div>
            <div className='form-group'>
              <p>Food Handler ID #:</p>
              <input 
                type='text'
                className='form-control'
                id='food-handler-id'
                name="food-handler-id"
                value={foodHandlerId}
                placeholder='Enter ID number'
                onChange={onChange} 
              />
            </div>
            <div className='form-group'>
              <p>ID issue date</p>
              <input 
                type='text'
                className='form-control'
                id='id-issue-date'
                name="id-issue-date"
                value={issueDate}
                placeholder='Enter issue date'
                onChange={onChange} 
              />
            </div>
            <div className='form-group'>
              <p>ID expiration date</p>
              <input 
                type='text'
                className='form-control'
                id='id-exp-date'
                name="id-exp-date"
                value={expirationDate}
                placeholder='Enter expiration date'
                onChange={onChange} 
              />
            </div>
            <div className='form-group'>
              <button type="submit">Add Employee Info!</button>
            </div>  
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

export default Employees
import React, { useState } from 'react';

export const Locations = () => {
  const [formData, setFormData] = useState({
    shopName: '',
    address: '',
  });

  const { shopName, address } = formData;

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

    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  }

  return (
    <div>
      <h2 className="Location-header">Inside Locations</h2>
      
      <div className="location-container">
        <div className="location-form">
        {submitting &&
        <div>Submitting form...</div>
        }
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <p>Shop Name</p>
            <input
              type='text'
              className='form-control'
              id='name' 
              name="shopName" 
              value={shopName}
              placeholder='Enter the name of your Business'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <p>Address</p>
            <input 
              type='text'
              className='form-control'
              id='address' 
              name="address" 
              value={address}
              placeholder='Enter the address of your Business'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type="submit">Add New Location</button>
          </div>
        </form>
        </div>

        <div className="location-display">
          <h4>Location display here</h4>
          <h2>Add unordered list here:</h2>
        </div>

      </div>
    </div>
  )
};
import React, { useState } from 'react';

export const Locations = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  return (
    <div>
      <h2 className="Location-header">Inside Locations</h2>
      <p>lorem20lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 </p>
      <div className="location-container">
        <div className="location-form">
        {submitting &&
        <div>Submitting form...</div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Shop Name</p>
              <input name="shop-name" />
              <p>Address</p>
              <input name="address" />
            </label>
          </fieldset>
          <button type="submit">Add New Location</button>
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
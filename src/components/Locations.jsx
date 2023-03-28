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
      <h2>Inside Locations</h2>
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
  )
};